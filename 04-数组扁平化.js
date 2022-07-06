// 数组扁平化
// ES5 递归
function flatten(arr) {
    let result = [];
    for (let v of arr) {
        if (Array.isArray(v)) {
            result = result.concat(flatten(v));
        } else {
            result.push(v);
        }
    }
    return result;
}

console.log(`[[10, 20, 40], 30, 40, [[[50], 60]]]`, flatten([[10, 20, 40], 30, 40, [[[50], 60]]]));


// ES6
console.log(`[[10, 20, 40], 30, 40, [[[50], 60]]]`, [[10, 20, 40], 30, 40, [[[50], 60]]].flat(Infinity));

function flattenEs6(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(`[[10, 20, 40], 30, 40, [[[50], 60]]]`, flattenEs6([[10, 20, 40], 30, 40, [[[50], 60]]]));