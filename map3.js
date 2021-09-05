const list = [1, '2', 3, '4', 5];

const result = list.map(x => {
    if (typeof x === 'number') {
        return x.toString();
    } else if (typeof x === 'string') {
        return Number(x);
    }
});

console.log(result);
console.log(10 % 2);
console.log('17' % 3);

