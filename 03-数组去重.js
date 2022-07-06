//数组去重
// ES5

function unique(arr) {
    return arr.filter((value, index, array) => {
        return array.indexOf(value) == index;
    })
}

console.log(`['1',1,2,3,4,4,5,6,7,7,8,9,8]`, unique(['1', 1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 8]));

// ES6
console.log(`['1',1,2,3,4,4,5,6,7,7,8,9,8]`, [...new Set(['1', 1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 8])]);

