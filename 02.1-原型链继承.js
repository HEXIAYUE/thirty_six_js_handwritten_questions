// 原型链继承
function colors() {
    this.colors = ['red', 'block'];
}
colors.prototype.getColor = function () {
    return this.colors;
}
colors.prototype.pushColor = function (value) {
    this.colors.push(value);
}

function color() { }
color.prototype = new colors();
let color1 = new color();
console.log(color1.getColor()); // [ 'red', 'block' ]
color1.pushColor("yellow");
let color2 = new color();
console.log(color2.getColor()); // [ 'red', 'block', 'yellow' ]

// 原型链继承存在的问题：
// 问题1：原型中包含的引用类型属性将被所有实例共享；
// 问题2：子类在实例化的时候不能给父类构造函数传参；