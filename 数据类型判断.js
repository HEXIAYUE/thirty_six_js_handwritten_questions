function typeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
console.log(typeOf(1)) // number
console.log(typeOf(new Number("1111"))) // number
console.log(typeOf('1')) // string
console.log(typeOf(new String("1111"))) // string
console.log(typeOf(null)) // null
console.log(typeOf(undefined)) // undefined
console.log(typeOf(false)) // boolean
console.log(typeOf([])) // array
console.log(typeOf({})) // object
console.log(typeOf(function () { })) // function
console.log(typeOf(NaN)) // number
console.log(typeOf(BigInt('1111'))) // bigint