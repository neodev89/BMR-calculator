const Attivita_Kcal = [
    // {
    //     attivita: "dormire",
    //     kcal: 0.93
    // },
    {
        attivita: "seduti a riposo",
        kcal: 1.43
    },
    {
        attivita: "in piedi a riposo",
        kcal: 1.50
    },
    {
        attivita: "cantare",
        kcal: 1.74
    },
    {
        attivita: "guidare",
        kcal: 1.90
    },
    {
        attivita: "scrivere al PC",
        kcal: 2.00
    },
    {
        attivita: "camminata lenta",
        kcal: 2.80
    },
    {
        attivita: "camminata veloce",
        kcal: 4.30
    },
    {
        attivita: "Krav Maga",
        kcal: 10.45
    },
    {
        attivita: "addominali",
        kcal: 8.4
    },
    {
        attivita: "push-up",
        kcal: 6
    }
];

const arrayAlimenti = [// valori medi per 100gr
    {
        alimento: "pane",
        kcal: 270
    },
    {
        alimento: "pasta",
        kcal: 137
    },
    {
        alimento: "ravioli",
        kcal: 332
    },
    {
        alimento: "carne bovina",
        kcal: 130
    },
    {
        alimento: "salsiccia fresca",
        kcal: 304
    },
    {
        alimento: "salsiccia secca",
        kcal: 514
    },
    {
        alimento: "cotoletta",
        kcal: 150
    },
    {
        alimento: "insalata",
        kcal: 105
    },
    {
        alimento: "fave cotte",
        kcal: 95
    },
    {
        alimento: "lenticchie",
        kcal: 92
    },
    {
        alimento: "fagioli",
        kcal: 102
    },
    {
        alimento: "ceci",
        kcal: 120
    },
    {
        alimento: "biscotti", //8gr per biscotto per 6 pz a colazione
        kcal: 477 // valori per 100gr
    },
    {
        alimento: "uova",
        kcal: 64 //una porzione da 100gr
    },
    {
        alimento: "piselli",
        kcal: 68
    },
    {
        alimento: "miele",
        kcal: 303 // un cucchiaino è 7gr (15kcal)
    },
    {
        alimento: "cipolla",
        kcal: 100
    },
    {
        alimento: "olio evo",
        kcal: 88 // un cucchiaio da cucina ovvero 10gr
    },
    {
        alimento: "cornetto algida",
        kcal: 190 // un pezzo
    },
    {
        alimento: "scaccia modicana",
        kcal: 175 // in media
    },
    {
        alimento: "vino",
        kcal: 70
    },
    {
        alimento: "birra",
        kcal: 41.52
    },
    {
        alimento: "whiskey",
        kcal: 245
    },
    {
        alimento: "caffè",
        kcal: 1
    }
    // kcal ogni 10cl


];
/*function Prova() {
    Attivita_Kcal.forEach(el => {
        let ArrEl = Object.values(el);
        console.log(ArrEl);
        
    });
} 
// Funziona magnificamente ma non si può importare 
// Javascript in jQuery

export {Prova};
*/
let ValueEl = [];

$(function() {
    Attivita_Kcal.forEach((el) => {
        ValueEl.push(el.attivita);
    });
    $('#attività').autocomplete({
        source: ValueEl,
        appendTo: "#suggerimento",
        classes: {
            "ui-autocomplete": "jqueryClasses"
        }
    })
});

let ValueAl = [];
$(
    function() {
        arrayAlimenti.forEach(el => {
            ValueAl.push(el.alimento);
        });
        $('#cibo').autocomplete({
            source: ValueAl,
            appendTo: "#menuCibo",
            classes: {
                "ui-autocomplete": "jqueryClasses"
            }
        })
    }
);

// $( function() {
//     var availableTags = [
//       "ActionScript",
//       "AppleScript",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
//     $( "#tags" ).autocomplete({
//       source: availableTags
//     });
//   } );