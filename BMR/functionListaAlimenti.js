import {arrayAlimenti} from '../JS/KcalAlimenti.js';
import { testFunc } from '../JS/testClass.js';
import { calPerGrammi } from '../JS/funzioniOperazioni.js';

const confrontoAlimenti = arrayAlimenti;
const inputAlimenti = Array.from(document.getElementsByClassName("alimenti"));
const quantiGrammi = Array.from(document.getElementsByClassName("quante")); //il Test_Class ha dato esito positivo
const resultKcal1 = Array.from(document.getElementsByClassName("resultKcal1"));
const sommaApportiKcal = document.getElementById('sommaApportiKcal');


const confrontaECalcolaKcalAlimenti = () => {
    let El0, El1, El2, El3;
    let lista = [];
    resultKcal1.forEach((el0, ind0) => {
        El0 = el0;
        el0.addEventListener('click', () => {
            quantiGrammi.forEach((el1, ind1) => {
            El1 = el1;
                inputAlimenti.forEach((el2, ind2) => {
                    El2 = el2;
                    confrontoAlimenti.forEach(el3 => {
                        El3 = el3;
                        if (El2.value == El3.alimento && ind0 == ind2 && ind0 == ind1) {
                            testFunc(El3.alimento);
                            testFunc(El3.kcal);
                            // fino a qui lavora
                            el0.textContent += calPerGrammi(El1.value, El3.kcal);
                            lista.push(el0.textContent);
                            let lista2 = lista.reduce((ol = 0, el) => (Number(ol) + Number(el)).toFixed(2));
                            console.log(lista2); // Funziona aaahahahahahah!
                            sommaApportiKcal.textContent = lista2;
                        }
                    })
                })
            })
        })
    })
}





export {confrontaECalcolaKcalAlimenti};