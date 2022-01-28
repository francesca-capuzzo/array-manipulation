let testArray  = [12, 57, 100, -67, -12, 5, 27, 48, -6000];
let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"];

let filteredArray1 = [];   //teniamo i numeri divisibili per 3.

let filteredArray2 = [];   //teniamo le stringhe che sono più lunghe di 6 caratteri.

let mappedArray1 = [];     //tutti i numeri dovranno essere ridotti del 10%.

let mappedArray2 = [];     //tutte le stringhe dovranno essere maiuscole.

let modifiedArray1 = [];   //tutti i numeri andranno trasformati in positivi e andranno eliminati i numeri maggiori di 100.

let modifiedArray2 = [];   //tutte le stringhe dovranno avere la prima lettera maiuscola e andranno eliminate le stringhe che non contengono la lettera "r".


// console.log(arrayNew.filter((e, i) => i % 2 === 0));  

function filter(arrayToFilter, filterFunction) {
    for (const element of arrayToFilter) {
        if (filterFunction(element)) {
            filteredArray1.push(element)
        }
    }
    return filteredArray1;
}



function dividingBy3(element) {
        return element % 3 === 0;
    }

console.log(filter(testArray, dividingBy3));

console.log(testArray.filter(dividingBy3));

console.log("lambda div3", filteredArray1.filter((element) => element % 3 === 0));

let filteredArray01 = testArray.filter((element) => element % 3 === 0);

console.log(filteredArray01);

///////////////////////////////////////////////////////

function filter2(arrayToFilter, filterFunction) {
    for (const element of arrayToFilter) {
        if (filterFunction(element)) {
            filteredArray2.push(element)
        }
    }
    return filteredArray2;
}


// function greaterThan6(elementToFilter) {
//     if (elementToFilter.length >= 6) {
//         return true;
//     } else {
//         return false;
//     }
// }

function greaterThan6(elementToFilter) {
   return elementToFilter.length >= 6;
}

console.log(filter2(testArray2,greaterThan6));

console.log(testArray2.filter(greaterThan6));

console.log("lambda > 6", filteredArray2.filter((e) => e.length >= 6));


//////////////////////////////////////////////////////


// function map(arrayToModify, alterationFunction) {
//     for (const element of arrayToModify) {
//         let modifiedElement = alterationFunction(element);
//         mappedArray1.push(modifiedElement);
//     }
//     return mappedArray1;
// }


function reduction10(element) {
    return (element -= element * 10 / 100); 
}

console.log(testArray.map(reduction10));

console.log("lambda reduction", testArray.map((e) => e * 10 / 100));


/////////////////////////////////////////////////////////

function capitalize(element) {
    return element.toUpperCase()
}

console.log(testArray2.map(capitalize));

console.log("lambda capitalize", testArray2.map((e) => e.toUpperCase()));

/////////////////////////////////////////////////////////

// function positive(element) {
//     if (element >= 0) {
//         return element;
//     } else if (element < 0){
//         return element * (-1);
//     }
// }


function positive(element) {
    return element < 0 ? element * (-1) : element
}


// console.log(testArray.map(positive));


//*********************/


function greaterThan100(element) {
    return element >= 100;
}

// console.log(testArray.filter(greaterThan100));


console.log(testArray.map(positive).filter(greaterThan100));   

let modifiedArray01 = testArray.map((e) => Math.abs(e)).filter(e => e <= 100);

console.log(modifiedArray01);

//////////////////////////////////////////////////////////////

// function firstUppercase(element) {
//     return element.charAt(0).toUpperCase() + element.slice(1) 
// }

// console.log(testArray2.map(firstUppercase));

function firstUppercase(element) {
    return element[0].toUpperCase() + element.slice(1);
}

console.log(testArray2.map(firstUppercase));


function removeR(element) {
    return element.includes("r");
}

console.log(testArray2.filter(removeR));

console.log(testArray2.map(firstUppercase).filter(removeR));  

let modifiedArray02 = testArray2.map((e) => e[0].toUpperCase() + e.slice(1)).filter(e => e.toLowerCase().includes("r"));

console.log(modifiedArray02);


//////////////////////////////////////////////////////////////////////////////////////////////
//FUNZIONE CHE DATO UN ARRAY SOMMA TUTTI GLI ELEMENTI:

function sumAll(arrayToSum) {
    let result = 0;
    for (const element of arrayToSum) {
        result += element;
    }
    return result;
}

console.log(sumAll(testArray));


///////////////////////////////////////////////////////////

function sum(previous, current) {
    return previous + current;
}


function product(previous, current, index) {
    return previous * current;
}

function reduce(arrayToReduce, aggregationFunction, startingElement) {  //starting Element ha un default (è l'index che parte da 0 oppure dal numero specificato)
    let result = startingElement;
    for (const element of arrayToReduce) {
        result = aggregationFunction(result, element);                  //aggregationFunction = sum()
    }
    return result;
}


console.log(reduce(testArray, sum, 0));

console.log(reduce(testArray, product, 1));



function reduce(arrayToReduce, aggregationFunction, startingElement) {  //starting Element ha un default
    let result;
    let startingIndex;
    if (startingElement !== null) {
        result = startingElement;
        startingIndex = 0;
    } else {
        result = arrayToReduce[0];
        startingIndex = 1;
    }
    for (let i = startingIndex; i < arrayToReduce.length; i++){
        const element = arrayToReduce[i];
        result = aggregationFunction(result, element);  
    }
    return result;
}


function sumEvenIndex(previous, current, index) {
    if (index % 2 === 0) {
        return previous + current;
    } else {
        return previous;
    }
}


function product(previous, current, index) {
    
}

function reduce(arrayToReduce, aggregationFunction, startingElement) {  //starting Element ha un default
    let result;
    let startingIndex;
    if (startingElement !== undefined) {               //oppure si può scrivere if (startingElement) {}
        result = startingElement;
        startingIndex = 0;
    } else {
        result = arrayToReduce[0];
        startingIndex = 1;
    }
    for (let i = startingIndex; i < arrayToReduce.length; i++){
        const element = arrayToReduce[i];
        result = aggregationFunction(result, element, i, arrayToReduce);  
    }
    return result;
}

console.log(reduce(testArray, sumEvenIndex));



console.log(testArray.reduce((previous, current, index, array) => previous + current, 0));


//////////////////////////////////////////////////////////////////////////////////////////////////
//DIVIDI TESTARRAY2 IN 2 ARRAY DIVERSI CONTENUTE IN UN ARRAY PIù GRANDE:

//PRIMO ARRAY = TUTTE QUELLE CHE INIZIANO CON "P"
//SECONDO ARRAY = TUTTE LE ALTRE

function dividiStringhe(previous, current) {                    //al primo giro decido quale starting element dare --> in questo caso un array vuoto
    if (current[0] === "p") {
        if (previous[0]) {                                      //PREVIOUS[0] è un array
            previous[0].push(current);
        } else {
            previous[0] = [];                                   //se invece non
            previous[0].push(current);
        }
    } else {
        if (previous[1]) {
            previous[1].push(current);
        } else {
            previous[1] = [];
            previous[1].push(current);
        }
    }
    return previous;
}


console.log(testArray2.reduce(dividiStringhe,[]));


function dividiStringhe(previous, current) {                   //al primo giro decido quale starting element dare --> in questo caso un array vuoto
    if (current[0] === "p") {
        if (!previous[0]) {
            previous[0] = [];                                  //PREVIOUS[0] è un array
        }
        previous[0].push(current);
    } else {   
        if (!previous[1]) {
            previous[1] = [];
        }
        previous[1].push(current);
    }
    return previous;
}


console.log(testArray2.reduce(dividiStringhe,[]));


function sumBySign(previous, current) {
    if (current >= 0) {
        if (previous.sumOfPositive) {
            previous.sumOfPositive += current;
        } else {
            previous.sumOfPositive = 0;
            previous.sumOfPositive += current;
        }
    } else {
        if (previous.sumOfNegatives) {
            previous.sumOfNegatives += current;
        } else {
            previous.sumOfNegatives = 0;
            previous.sumOfNegatives += current;
        }
    }
    return previous;
}

function sumBySign(previous, current) {
    if (current >= 0) {
        if (!previous.sumOfPositive) {
            previous.sumOfPositive = 0;
        }
        previous.sumOfPositive += current;
    } else {
        if (!previous.sumOfNegatives) {
            previous.sumOfNegatives = 0;
        }
        previous.sumOfNegative += current;
    }
    return previous;
}


console.log(testArray.reduce(sumBySign,{}));




let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"]


function orderString(previous, current, index) {
    if (index % 2 === 0) {
        return previous + " " + current;;
    }
    return previous;
}


console.log(testArray3.reduce(orderString));

console.log(testArray3.reduce((p, c, i) => i % 2 === 0 ? p + " " + c : p));