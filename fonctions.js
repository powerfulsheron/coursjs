function calcul(x, y, operation) {
    if(operation === "*") {
        return x * y;
    }
    if(operation === "+") {
        return x + y;
    }
    if(operation === "-") {
        return x - y;
    }
}

const addition = calcul(3, 4, '+'); 
const mutliplication = calcul(3, 4, '*');

function substract(x, y) {
    x = x + 1;
    y += 1;
    return x-y;
}

console.log(substract(3,4));