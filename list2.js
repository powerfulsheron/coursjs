const points = [40, 100, 1, 5, 25, 10];

console.log(points.sort());

console.log(points.sort(
    function(a, b) {
        //console.log(a);
        //console.log(b);
        return a - b;
    }
));

console.log(points.sort((a, b) => a - b));