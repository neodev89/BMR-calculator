function example(Peso, Altezza, Eta){
    const BMR = Math.round(66.4730 +
        (13.7516 * Peso) + 
        (5.0033 *  Altezza)- 
        (6.7550 * Eta)
        );
    return BMR;

}


export {example};