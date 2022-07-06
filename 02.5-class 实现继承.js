// class 实现继承
class Animal {
    constructor(name) {
        this.name = name;
        this.colors = ['black', 'white'];
    }
    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('哈赤', 1)

console.log(dog1); // { name: '奶昔', colors: [ 'black', 'white', 'brown' ], age: 2 }
console.log(dog2); // { name: '哈赤', colors: [ 'black', 'white' ], age: 1 }