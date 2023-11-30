/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*  

const area = (l1, l2) => {
  return l1 * l2;
};

console.log(area(3, 5));

*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*  

const crazySum = (x, y) => {
  if (x === y) {
    return (x + y) * 3;
  } else  {
    return x + y;
  }
};

console.log(crazySum(4, 4));

*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* 

const crazyDiff = (x) => {
  result = x - 19;
  if (result > 19) {
    return result * 3;
  } else {
    return result;
  }
};

console.log(crazyDiff(40));
*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* 

const boundary = (n) => {
  if (n > 20 && n <= 100) {
    return "true";
  } else if (n === 400) {
    return "true";
  } else {
    return "out of boundary";
  }
};

console.log(boundary(100));

*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* 

const epify = (aString) => {
  const firstWord = aString.split(" ")[0];
  if (firstWord === "EPICODE") {
    return aString;
  } else {
    return "EPICODE" + " " + aString;
  }
};

console.log(epify("EPICODE bootcamp"));
console.log(epify("nuova generazione"));

*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* 

const check3and7 = (x) => {
  if (x > 0 && x % 3 === 0) {
    return "multiple of 3";
  } else if (x > 0 && x % 7 === 0) {
    return "multiple of 7";
  } else if (x <= 0) {
    return "the number has to be positive";
  } else {
    return "the number you have chosen," + " " + "isn't a  multiple of 3 or 7";
  }
};

console.log(check3and7(0));

*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* 

const reverseString = (bString) => {
  let reveString = "";
  for (let i = bString.length - 1; i >= 0; i--) {
    reveString += bString[i];
  }
  return reveString;
};

console.log(reverseString("delfino"));
*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* 

const upperFirst = function (cString) {
  let upString = cString.split(" ");
  for (let i = 0; i < upString.length; i++) {
    upString[i] = upString[i].charAt(0).toUpperCase() + upString[i].slice(1);
  }
  return upString.join(" ");
};
console.log(upperFirst("this was an assault to my brain"));

*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

const cutString = (dString) => {
  return dString.slice(1, -1);
};

console.log(cutString("magia"));

*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* 

const giveMeRandom = (n) => {
  let numberArrey = [];
  for (var i = 0; i < n; i++) {
    numberArrey.push(Math.floor(Math.random() * 10));
  }
  return numberArrey;
};

console.log(giveMeRandom(5));

*/
