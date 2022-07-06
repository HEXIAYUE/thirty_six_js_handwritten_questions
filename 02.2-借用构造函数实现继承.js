// 借用构造函数实现继承
function Animal(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = new Animal();

let dog = new Dog('dogs');
console.log(dog.name); // dogs 
console.log(dog.getName()); // dogs 

function Cat(name) {
    Animal.call(this, name);
}
let cat = new Cat('cats');
console.log(cat.name); // cats
console.log(cat.getName()); // cats

console.log(dog.name); // dogs 
console.log(dog.getName()); // dogs 
//借用构造函数实现继承解决了原型链继承的 2 个问题
// 引用类型共享问题以及传参问题。但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。
