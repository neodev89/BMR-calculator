const trovaErrore = (V1, V2, V3, V4) => {
    if((V1, V2, V3, V4) === '') {
        return 0;
    }
};

const SumConsumi = (A, B, C, D) => {
    let somma = Math.floor(A * B * (C + (D/60))).toFixed(2);
    // kcal * Weight * (ore + (minuti/60))
    // A    * B      * (C    + (D/60))
    return somma;
}; 

const sumCibiKcal = (A, B) => {
    let somma1 = (Math.round(A * B).toFixed(2));
    return somma1;
}; // Funzione riutilizzabile usata per il calcolo delle kcal dei cibi

const Disable = (W, H , A, BMan, BWoman) => {
    W.disabled = true;
    H.disabled = true;
    A.disabled = true;
    BMan.disabled = true;
    BWoman.disabled = true;
};

const Enable = (W, H , A, BMan, BWoman) => {
    W.disabled = false;
    H.disabled = false;
    A.disabled = false;
    BMan.disabled = false;
    BWoman.disabled = false;
};

const listAttivita = (inputValue, Div) => {
    Div.innerHTML = '';
    if(inputValue.value !== '') {
        Div.innerHTML = inputValue.value;
    } else {
        Div.innerHTML = '';
    }
    inputValue.focus();
};

function convertMyArrayObj({...array}) {
    var jsonObj = object.assign({}, array);
}

export {trovaErrore, SumConsumi, sumCibiKcal, Disable, Enable, listAttivita, convertMyArrayObj};