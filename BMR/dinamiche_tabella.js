import { Attivita_Kcal } from "./lista_kcal_consumi.js";
import { arrayAlimenti } from "./KcalAlimenti.js";
import { SumConsumi, sumCibiKcal, Disable, Enable } from "./functionOver.js";
import { testHAndB, emptyInput, initialRoles } from "./functionTest.js";



let BMR;
const btnUomo = document.getElementById('uomo');
const btnDonna = document.getElementById('donna');
const attivaBMI = document.getElementById('attivaBMI');
const cancBMI = document.getElementById('cancellaBMI');
let saveResultBMI;
let Weight = document.getElementById('weight');
let NumberBMR;
let Height = document.getElementById('height');
let Age = document.getElementById('age');
let SpanFormula = document.getElementById('formula');
const ResetBMR = document.getElementById('cancella');
const resetValues = document.getElementById('reset');
let valoriConsumi = [];
let valoriPresi = [];
let ArraytoConvertInJson = [];
let RecordingWeight = document.getElementById('recordingWeight'); 
// RecordingWeight serve per la tabella riepilogativa in fondo
// alla pagina
let ParamSpan = Array.from(document.getElementsByClassName('parametri'));
let theEnd = document.getElementById('fine');
let ObjJson;

// elementi dove appenderò un riepilogo delle attività e dei cibi
// inseriti negl'inputs

// const upInput = (input) => {
//     SpanFormula.textContent = input;
    
//     valoriConsumi.push(Number(input));
//     // console.log(valoriConsumi);
// };



const harrisAndBenedictUomo = (W, H, A) => {
    if(W == '' || H == '' || A == '') {
        SpanFormula.innerHTML = 'campi incompleti';
        RecordingWeight.textContent = '';
        emptyInput(W, H, A);
        valoriConsumi.push(0);
        
    } else {
    if(W != '' && H != '' && A != '') {
        const man = Math.round(66.4730 + (13.7516 * W) + 
        (5.0033 * H) - (6.7550 * A)).toFixed(2);
        BMR = man;
        SpanFormula.innerHTML = man;
        RecordingWeight.textContent = man + ' kcal';
        Disable(Weight, Height, Age, btnUomo, btnDonna);
        attivaBMI.focus();
        NumberBMR = Number(BMR);
        valoriConsumi.push(NumberBMR);
        ArraytoConvertInJson.push({"bmr": BMR});
        console.log(`la funzione Harris & Benedict restituisce a numero ${NumberBMR}`);
        console.log(typeof(NumberBMR));
        return man;
    } else {
        Weight.style.backgroundColor = 'red';
        Height.style.backgroundColor = 'red';
        Age.style.backgroundColor = 'red';
    }
    }
};// calcolo BMR Uomo

const harrisAndBenedictDonna = (W, H, A) => {
    if(W !== '') {
        const woman = Math.round(655.095 + (9.563 * W) + 
        (1.8496 * H) - (4.6756 * A)).toFixed(2);
        SpanFormula.innerHTML = woman;
        RecordingWeight.textContent = woman + ' kcal';
        Disable(Weight, Height, Age, btnUomo, btnDonna);
        inputAttivita.focus();
        valoriConsumi.push(NumberBMR);
        console.log(`la funzione Harris & Benedict restituisce a numero ${NumberBMR}`);
        console.log(typeof(NumberBMR));
        return woman;
    } else {
        Weight.focus();
    };
    
};// calcolo BMR Donna

const Cancella = () => {
    Weight.value = '';
    Height.value = '';
    Age.value = '';
    SpanFormula.innerHTML = '';  
    RecordingWeight.textContent = '';
    valoriConsumi = [];
    valoriPresi = [];
    ArraytoConvertInJson = [];
    Enable(Weight, Height, Age, btnUomo, btnDonna);
    initialRoles(Weight);
    initialRoles(Height);
    initialRoles(Age);
    Weight.focus();
}; //Resetta tutti i valoriConsumi BMR

const cancellaBMI = () => {
    ParamSpan.forEach((el, index) => {
        if(index === 0) {
            el.textContent = '';
        } else {
            el.textContent = '';
        }
    });
    theEnd.textContent = '';
};

// Calcolo semplice del BMI

const calcBMI = () => {
    let quadrHeight = Math.pow((Height.value/100), 2);
    let result = (Weight.value / quadrHeight).toFixed(2);
    
    ParamSpan.forEach((el, index) => {
        if(index === 0) {
            el.textContent = Weight.value;
        } else {
            el.textContent = Height.value;
        }
        if(result < 16.00) {
            theEnd.classList.add('magro');
            return theEnd.textContent =  result += ' grave magrezza';
        } else if(result >= 16.00 && result < 18.49){
            theEnd.classList.add('sottopeso');
            return theEnd.textContent =  result += ' sottopeso';
        } else if(result >= 18.50 && result < 24.99){
            theEnd.classList.add('normo');
            return theEnd.textContent =  result += ' normopeso';
        } else if(result >= 25.00 && result < 29.99){
            theEnd.classList.add('sovrappeso');
            return theEnd.textContent =  result += ' sovrappeso';
        } else if(result >= 30.00 && result < 34.99){
            theEnd.classList.add('obeso1');
            return theEnd.textContent =  result += ' obeso classe 1';
        }
        
    });
    saveResultBMI = result;
    inputAttivita.focus();
};



// Qui inserisco tutti i valoriConsumi inerenti al calcolo delle attività e
// al consumo delle kcal
// const divActive = document.getElementById('Active');
const inputAttivita = document.getElementById('attività');
const divKcal = document.getElementById('kcal');
const inputOreSvolte = document.getElementById('oreSvolte');
const inputMinutiSvolti = document.getElementById('minutiSvolti');
const divRisultato = document.getElementById('risultato');
const spanList = Array.from(document.getElementsByClassName('list'));


const giveKcal = () => {
    let Vl = (inputAttivita.value).toLowerCase();
    let NumberWeight = Number(Weight.value);
    let elAtt;
    let elKcal;
    let oreSvolte = (Number(inputOreSvolte.value)); 
    let MinutiValue = Number(inputMinutiSvolti.value);
    let resultActivity;
    if(inputAttivita.value === '') {
        emptyInput(inputAttivita.value, inputMinutiSvolti.value, inputOreSvolte.value);
        divRisultato.textContent = "0 kcal";
        resultActivity = 0;
        
    } else {
        Attivita_Kcal.forEach((el) => {
            if(Vl !== (el.attivita).toLowerCase()) {
                valoriConsumi.push(0);
                divRisultato.textContent = "0 kcal";
            } else {
                if((el.attivita).toLowerCase() == Vl) {
                    elAtt = (el.attivita).toLowerCase();
                    elKcal = el.kcal;
                    console.log(elKcal)
                    divKcal.textContent = elKcal;
                    divRisultato.textContent = '';
                    console.log(elKcal, NumberWeight, oreSvolte, MinutiValue);
                }
            }
            
            resultActivity = SumConsumi(elKcal, NumberWeight, oreSvolte, MinutiValue,);
            // questa function deve calcolare le kcal * weight * (h + (minuti/60)).

            divRisultato.innerHTML = `${resultActivity} kcal`;
            // console.log(`Qui ho i Valori dei Consumi aggiunti all'array corrispondente
            // ${valoriConsumi}`);
        });
        // console.log(SumConsumi(el.kcal, NumberWeight, oreSvolte, MinutiValue));

        ArraytoConvertInJson.push({attivita: elAtt, kcal: Number(resultActivity)});
        valoriConsumi.push(Number(resultActivity));

    }
            
        spanList.forEach((el, index) => {
        let Ul = document.createElement('ul');
        if(index === 0) {
            if(elAtt === undefined) {
                el.textContent = '';
            } else {
                Ul.classList.toggle('jqueryClasses');
                let Li = document.createElement('li');
                Li.append(elAtt);
                Ul.appendChild(Li);
                el.appendChild(Ul);
            }
        }
    });
    // trovaErrore(elAtt, elKcal, oreSvolte, MinutiValue);
    // let Summa = Sum(elKcal, oreSvolte, MinutiValue, saveWeight);
    // valoriConsumi.push(Number(Summa));
   
// con giveKcal ottengo l'attività svolta e il consumo kcal inerente
    

};

// Qui inserisco il ciclo sul Cibo assunto
let CiboAssunto = document.getElementById('cibo');
let ciboKcal = document.getElementById('ciboKcal');
let inGrammi = document.getElementById('inGrammi');
let risultatoKcalorico = document.getElementById('risultatoKcalorico');

const giveFoodKcal = () => {
    let Fl = (CiboAssunto.value).toLowerCase();
    let elFood;
    let elKcal;
    let Grammo = Number(inGrammi.value);
    let resultFoods;

    if(Fl === '') {
        risultatoKcalorico.textContent = '0 kcal';
        elKcal = 0;
        resultFoods = 0;
    } else {
        arrayAlimenti.forEach((el) => {
            if(Fl !== (el.alimento).toLowerCase() && inGrammi.value === undefined) {
                risultatoKcalorico.innerHTML = '0 kcal'; 
                elKcal = 0;
                inGrammi.value = false;
            } else {
                if((el.alimento).toLowerCase() === Fl && inGrammi.value != undefined) {
                    elFood = el.alimento;
                    elKcal = el.kcal;
                    ciboKcal.innerHTML = elKcal;
                    // console.log(elFood, elKcal, Grammo);
                    resultFoods = sumCibiKcal(elKcal, Grammo);
                }
            }
            
            risultatoKcalorico.innerHTML = `${resultFoods} kcal`;
        });
    }
            
    // console.log(typeof(elKcal));

    spanList.forEach((el,index) => {
        let Ul = document.createElement('ul');
        if(index === 1) {
            if(elFood === undefined) {
                elFood = 0;
                
            }
            Ul.classList.toggle('jqueryClasses');
                let Li = document.createElement('li');
                Li.append(elFood);
                Ul.appendChild(Li);
                el.appendChild(Ul);
        }
    });
    valoriPresi.push(Number(resultFoods));
    console.log(`Qui ho i Valori dei cibi assunti aggiunti all'array corrispondente
    ${valoriPresi}`);
};

// il calcolo del div grassoOMagro
let riepilogoFinale = document.getElementById('riepilogoFinale');
let BtnConvert = document.getElementById('convertiArray');

let Arr1;
let Arr2;

const ConvertArray = () => {
   
    Arr1 = valoriConsumi.reduce((el, total) => {
        return el + total;
    });
   
    Arr2 = valoriPresi.reduce((el1, total1) => {
        return el1 + total1;
    });
    let resultFinally = Math.floor(Arr1 - Arr2).toFixed(2);
    console.log(Arr1);
    console.log(Arr2);
    console.log(resultFinally);
    if(resultFinally < 0) {
        riepilogoFinale.classList.toggle('piùAssunzioni');
        riepilogoFinale.textContent = ` ${resultFinally}`;
    } else if(resultFinally >= 0) {
        riepilogoFinale.classList.toggle('piùConsumi');
        riepilogoFinale.textContent = ` ${resultFinally}`;
    }
    // Finito 
    ArraytoConvertInJson.push({consumi_totali: Arr1}, {assunzioni_totali: Arr2}, {totale: Number(resultFinally)});
    console.log(ArraytoConvertInJson);
};

// salvare i dati in un file JSON
const btnSaveResult = document.getElementById('salvaRisultati');
// let fileJsonMio = new URL('D:\Tabelle Kcal\BMR\javascript\saveResultJson.json');

const SaveResult = () => {
    ObjJson = JSON.stringify(ArraytoConvertInJson);
    console.log(ObjJson);
};

export {ObjJson};



const emptyValue = () => {
    CiboAssunto.value = '';
    ciboKcal.textContent = '';
    inGrammi.value = '';
    risultatoKcalorico.innerHTML = '';

    inputAttivita.value = '';
    divKcal.innerHTML = '';
    inputOreSvolte.value = '';
    inputMinutiSvolti.value = '';
    divRisultato.innerHTML = '';
    inputAttivita.focus();
};

// bottone Reset per cancellare il riepilogo finale
const btnCancellaRiepilogo = document.getElementById('cancellaRiepilogo');
const CancellaRiepilogo = () => {
    spanList.forEach((el, index) => {
        if(index >= 0) {
            el.textContent = '';
            el.classList.remove('jqueryClasses');
        }
    });
    riepilogoFinale.textContent = '';
};

document.addEventListener('DOMContentLoaded', () => {
    Weight.addEventListener('focusout', () => testHAndB(Weight));
    Height.addEventListener('focusout', () => testHAndB(Height));
    Age.addEventListener('focusout', () => testHAndB(Age));

    btnUomo.addEventListener('click', () => {
       harrisAndBenedictUomo(Weight.value, Height.value, Age.value);
    });
    btnDonna.addEventListener('click', () => {
        harrisAndBenedictDonna(Weight.value, Height.value, Age.value);
    });
    ResetBMR.addEventListener('click', () => {
        Cancella(Weight.value, Height.value, Age.value, SpanFormula.innerHTML)
    });
    inputMinutiSvolti.addEventListener('focusout', () => giveKcal());
    
    // CiboAssunto.addEventListener('focusout', () => offFoodtip());
    inGrammi.addEventListener('focusout', () => giveFoodKcal());
    BtnConvert.addEventListener('click', () => ConvertArray());
    resetValues.addEventListener('click', () => emptyValue());
    attivaBMI.addEventListener('click', () => calcBMI());
    cancBMI.addEventListener('click', () => cancellaBMI());
    btnCancellaRiepilogo.addEventListener('click', () => CancellaRiepilogo());
    btnSaveResult.addEventListener('click', () => {
        SaveResult()
    });
    

});


// Qui inserisco il ciclo per il Tooltip
// let spanTools = Array.from(document.getElementsByClassName('Tools'));
// let Ul = document.createElement('ul');

// const activeTooltip = () => {
//     Attivita_Kcal.forEach(el => {
//         let Li = document.createElement('li');
//         Li.append(el.attivita);
//         Ul.append(Li);
//     });
//     spanTools[0].appendChild(Ul);
//     spanTools[0].classList.toggle('visible');
//     spanTools[0].classList.remove('invisible');
// }; // NON si può renderla riutilizzabile

// const offTooltip = () => {
//     Ul.textContent = '';
//     spanTools[0].classList.toggle('invisible');
//     spanTools[0].classList.remove('visible');
// };

