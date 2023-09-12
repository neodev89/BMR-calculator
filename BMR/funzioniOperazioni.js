const stampaListe = (div, lista) => {
    return (div, lista);
};

const deleteInput = (input) => {
    input.value = '';
};// FUNZIONA    

const kcalRimaste = (el1, el2, el3) => { // el1 ed el2 sono le Kcal consumate; el3 sono le kcal assunte
    let result = ((Number(el1) + Number(el2)) - Number(el3)).toFixed(2);
    return result;
};

const calPerGrammi = (grammi, elCalorie) => {
    let result = ((Number(grammi)/100) * elCalorie).toFixed(2);
    return result;
}

const kcalAttivita = (a, b, c) => {
    let result = ((a * b)* c).toFixed(2);
    return result;
};



export { deleteInput, stampaListe, calPerGrammi, kcalAttivita };

