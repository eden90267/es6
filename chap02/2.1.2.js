// let、const不存在變數提升
console.log(foo);
console.log(bar); // ReferenceError: bar is not defined

var foo = 2;
let bar = 2;