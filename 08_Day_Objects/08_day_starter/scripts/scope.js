
var i = 0;
const ss = "lane";
let z = 1.1;
var x = 1;

function f() {
    console.log("x:", x);
    console.log("z:", z);
    console.log("ss:", ss)
}
f()

function ff() {
    i = 9
    console.log(x) // undefined becauseof var x = 3;因为使用了var则，在进入函数前提前初始化了该变量即 值为undefined
    // 使用let会检查是否已经声明变量，若已经声明则报错，在开发中建议使用let和const，少量使用var和为空的声明操作关键字
    // let x = 3; //Uncaught SyntaxError: Identifier 's' has already been declared (at scope.js:1:1)
    var x = 3;
    console.log(x)
};
ff();

function fff() {
    inner = "333"; // 在块作用域声明变量，不加var，let，const则为global variables
}
fff()


console.log("i= ", i)
console.log("x: ", x);
console.log("inner val: ", inner)


var unknown;
console.log(unknown);