let numberToString="";

function checkPrime(number){

let checkForPrime3 = number%3;

if (checkForPrime3 === 0){numberToString += "Pling"}

let checkForPrime5 = number%5;

if (checkForPrime5 === 0){numberToString += "Plang"}

let checkForPrime7 = number%7;

if (checkForPrime7 === 0){numberToString += "Plong"}

if(numberToString.length < 1){numberToString += number}
  
 return numberToString;
 
}
 
 console.log(checkPrime(1755));