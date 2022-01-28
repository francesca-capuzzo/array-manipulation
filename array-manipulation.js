//************************** FILTER *********************/


let myArray = [100, 101, 9, 1000, 12, -3];

function filterToRemoveGreaterThan100(arrayToFilter) {
    let tempArray = [];
    for (const element of arrayToFilter) {
        if (element <= 100) {
            tempArray.push(element);
        }
    }
    return tempArray;
}

console.log(filterToRemoveGreaterThan100(myArray));


function greaterThan30(element) {                        //funzione di filtraggio che verifica la condizione posta.
    if (element > 30) {
        return true;
    } else {
        return false;
    }
}

//RISCRIVO GREATER THAN 30 IN MANIERA PIù CORRETTA:

function greaterThan30(element) {                     //prende element e lo confronta con la condizione e ritorna true se è vera e false se è falsa, senza bisogno dell'IF!!
    return (element > 30);
}


function filter(arrayToFilter, filterFunction) {
    let tempArray = [];
    for (const element of arrayToFilter) {
        if (filterFunction(element)) {
            tempArray.push(element)
        }
    }
    return tempArray;
}

console.log(filter(myArray, greaterThan30));

//NB: LA CONDIZIONE DELL'IF è L'UNICA COSA CHE CAMBIA IN TUTTI I CICLI E METODI DI TUTTI GLI ESERCIZI IN QUESTA PAGINA!!!


function isEven(element) {
    if (element % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

//oppure in versione più corta (e sensata):

function isEven(element) {
   return (element % 2 === 0)
}

//se la passo alla funzione di filtraggio generica (filter):

console.log("mia filter function", filter(myArray, isEven));

console.log("Javascript filter function", myArray.filter(isEven));


function isPositive(element) {
    return (element > 0);
}

console.log("isPositive filter", myArray.filter(isPositive));

/////////////////////////////////////////////////////////////////////////////////////////////

//3 MODI PER SCRIVERE LA STESSA FUNZIONE:

// function isNegative(element) {                    //metodo più verboso.
//     if (element < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


function isNegative(element) {                     //metodo easy, classico!
    return element < 0;
}



let isNegative2 = function (element) {             //stessa cosa ma con la funzione senza nome (anonima); in realtà la metto in una variabile quindi il suo nome sarà quello.
    return element < 0;
}



let isNegative3 = (element) => element < 0;         //nome + elemento in input + => + elemento che sto ritornando.


// let isNegative4 = (element) => {                    //se una funzione lambda è multilinea, si scrive come il primissimo caso con { } e con il RETURN!!!!
//     if (element < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }



///////////////////////////////////////////////////////////////////////////////////////////////
//UTILIZZO DELLE FUNZIONI PRECEDENTI DIRETTAMENTE NEL LOG:


let arrayNew = [3, 5, -8, 67, -123]

console.log(arrayNew.filter(isNegative));                  //RESULT: [-8, -123]

console.log(arrayNew.filter(function(element){             //RESULT: [-8, -123]
    return element < 0;
}));

console.log(arrayNew.filter((element) => element < 0));    //RESULT: [-8, -123]


//NB: tutte le funzioni passate alla filter function NON solo hanno dentro l'elemento ma anche l'INDICE DI QUELL'ELEMENTO:

function hasEvenPosition(element, index) {                  //voglio tutti gli elementi dell'array in posizione pari (INDICE PARI)
    if (index % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

console.log(arrayNew.filter(hasEvenPosition));               //RESULT: [3, -8, -123]

//OPPURE: (con la funzione nel log)

console.log(arrayNew.filter(function(element, index){        //RESULT: [3, -8, -123]
    return index % 2 === 0;
}));

console.log(arrayNew.filter((e, i) => i % 2 === 0));         //RESULT: [3, -8, -123]  --> programmatore pigro, per e intende elementi e per i intende indice(index)

//NB: ANCHE SE NON USO ELEMENT ALL'INTERNO DELLA CONSOLE LOG, DEVO SCRIVERLO LO STESSO PERCHè è SEMPRE IL PRIMO ELEMENTO.. ALTRIMENTI NON POTREI AGGIUNGERE L'INDEX DI SEGUITO!!!






////////////////////////////////////////////////////////////////////////////////////////////////////

//********************* MAP ***********************/


let myArray2 = [100, 101, 9, 1000, 12, -3];  



function addOneToArray(arrayToModify) {
    let tempArray = [];
    for (const element of arrayToModify) {
        let modifiedElement = element + 1;
        tempArray.push(modifiedElement);
    }
    return tempArray;
}


console.log(addOneToArray(myArray2));                     //RESULT: [101, 102, 10, 1001, 13, -2]  


function addOne(element) {
    return element + 1;
}


function map(arrayToModify, alterationFunction) {
    let tempArray = [];
    for (const element of arrayToModify) {
        let modifiedElement = alterationFunction(element);
        tempArray.push(modifiedElement);
    }
    return tempArray;
}

//TUTTI I SEGUENTI MODI DI CHIAMARE LA FUNZIONE O SCRIVERLA, SONO IDENTICI!!!:

//I PRIMI DUE SOLO SE HO PRIMA DEFINITO LA FUNZIONE ADDONE

console.log(map(myArray2, addOne));                      //RESULT: [101, 102, 10, 1001, 13, -2]  

console.log(myArray2.map(addOne));                       //RESULT: [101, 102, 10, 1001, 13, -2]  

//I SEGUENTI DUE SENZA PRIMA DEFINIRE NESSUNA FUNZIONE (la definisco direttamente nella chiamata al log)

console.log(myArray2.map(function(element){              //RESULT: [101, 102, 10, 1001, 13, -2]  
    return element + 1
}));

console.log(myArray2.map((element) => element + 1));     //RESULT: [101, 102, 10, 1001, 13, -2]  



//*****************************************************/

function elementIndexProduct(element, index) {                   //RESULT: [0, 102, 10, 1001, 13, -2] 
    return element * index;
}

console.log(myArray2.map(elementIndexProduct));                  //RESULT: [0, 102, 10, 1001, 13, -2] 

console.log(myArray2.map(function(element, index){               //RESULT: [0, 102, 10, 1001, 13, -2] 
    return element * index;
}));

console.log(myArray2.map((element, index) => element * index));  //RESULT: [0, 102, 10, 1001, 13, -2] 

//****************************************************/


console.log(myArray2.map(elementIndexProduct).filter(isNegative));     //fa il prodotto degli elementi di MyArray2 con il loro indice e poi mi restituisce solo i valori negativi

console.log(myArray2.map(elementIndexProduct)
                    .filter(isNegative));                              //questo è il modo più leggibile di scriverlo ma è identico 

//RESUL: [-15]