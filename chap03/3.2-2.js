var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz);


let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f);
console.log(l);



// 這實際上說明，對象的解構賦值是下面形式的簡寫
// var { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };

// 也就是說，對象的解構賦值的內部機制，是先找到同名屬性，然後再賦給對應的變數。真正被賦值的是後者，而不是前者
console.log(foo); // ReferenceError: foo is not defined