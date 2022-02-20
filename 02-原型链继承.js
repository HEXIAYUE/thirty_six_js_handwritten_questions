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