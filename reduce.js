const numbers = [45, 4, 9, 16, 25];

function myFunction(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
}

console.log("resultat final", numbers.reduce(myFunction));