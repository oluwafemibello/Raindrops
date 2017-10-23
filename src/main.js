

function checkPrimeExist(number){

let numberToString="";

if (number < 0){return 'undefined'}

else if (number === 0){return '0 have no Prime Factor'}

else if (!number){return 'undefined'}

else if (typeof number === "object"){return 'undefined'}

else if (typeof number === "string"){return 'undefined'}

else if (Math.floor(number) !== number){return 'undefined'}

else{
let checkForPrime3 = number%3;

if (checkForPrime3 === 0){numberToString += "Pling"}

let checkForPrime5 = number%5;

if (checkForPrime5 === 0){numberToString += "Plang"}

let checkForPrime7 = number%7;

if (checkForPrime7 === 0){numberToString += "Plong"}

if(numberToString.length < 1){numberToString = number}
  
 return numberToString;
 }
}

module.exports = {checkPrimeExist};