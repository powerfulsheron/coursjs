function sub(x, y) {
    return x - y;
}

function calcultotal(x, y) {
    function mult(x, y) {
        return x * y;
    }
    
    function add(x, y) {
        return x + y;
    }

    // En gros il fait 12 - 7
    return sub(mult(x,y),add(x,y));
}

console.log(sub(3,4));
console.log(calcultotal(3,4));