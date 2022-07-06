// 寄生式组合继承
function Animal(name) {
    this.name = name;
    this.colors = ['black', 'white'];
}

Animal.prototype.getName = function () {
    return this.name;
}

function Dog(name, age) {
    Animal.call(this, name);
    this.age = age;
}

function F() {

}
F.prototype = Animal.prototype;
let f = new F();
f.constructor = Dog;
Dog.prototype = f;

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('哈赤', 1)

console.log(dog1); // { name: '奶昔', colors: [ 'black', 'white', 'brown' ], age: 2 }
console.log(dog2); // { name: '哈赤', colors: [ 'black', 'white' ], age: 1 }