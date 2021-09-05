const list = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];
const list3 = [1, 2, 3, 4, 5];

// 1
console.log(list.map(test)); 
function test(x) {
    return x + 1;
}

// 2
console.log(
    list2.map(x => {
        return x + 1; 
    })
);

// 3
console.log(
    list3.map(x => x + 1)
);
 
// les notations 1, 2 et 3 font la même chose 