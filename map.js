const list = [1, '2', 3, '4', 5];

// 1
list.map(test(x)); 
function test(x) {
    return x;
}

// 2
list.map(x => {
   return x; 
}); 

// 3
list.map(x => x); 
 
// les notations 1, 2 et 3 font la même chose 