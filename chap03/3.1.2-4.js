let [x=1, y=x] = [];
console.log(x); // 1
console.log(y); // 1

let [x=1, y=x] = [2];
console.log(x); // 2
console.log(y); // 2

let [x=1, y=x] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let [x=y, y=1] = []; // ReferenceError
console.log(x);
console.log(y);