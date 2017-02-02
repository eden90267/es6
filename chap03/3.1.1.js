// ES6允許按照一定模式，從陣列和對象中提取值，對變數進行賦值，這被稱為解構(Destructuring)

// 原ES5
var a = 1;
var b = 2;
var c = 3;

// ES6
var [a, b , c] = [1, 2, 3];

// 這種寫法屬於"模式匹配"，只要等號兩邊的模式相同，左邊的變數就會被賦予對應的值
// 下面是一些使用嵌套陣列進行進行解構的例子
let [foo, [[bar], baz]] = [1, [[2], 3]];

console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

let [,,thirdd] = ["foo", "bar", "baz"];
console.log(thirdd); // "baz"

let [x,,y] = [1,2,3];
console.log(x); // 1
console.log(y); // 3

let [head, ...tail] = [1,2,3,4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

let [m, n, ...o] = ['a'];
console.log(m); // "a"
console.log(n); // undefined
console.log(o); // []

// 如果解構不成功，變數的值就等於undefined
var [gg] = [];
var [ss, xx] = [1];
console.log(gg); // undefined
console.log(ss); // 1
console.log(xx); // undefined

// 不完全解構
let [p, q] = [1, 2, 3];
console.log(p); // 1
console.log(q); // 2

let [r, [s], t] = [1, [2,3], 4];
console.log(r); // 1
console.log(s); // 2
console.log(t); // 4

// 如果等號的右邊不是陣列(或嚴格的說，不是可遍歷的結構)，那麼將會報錯
// let [fooo] = 1;
// let [fooo] = false;
// let [fooo] = NaN;
// let [fooo] = undefined;
// let [fooo] = null; // 以上五個不具備Iterator接口
// let [fooo] = {}; // 本身不具備Iterator接口

// 解構賦值不僅適用var命令，也適用let和const命令

// 對於Set結構，也可以使用陣列的解構賦值
let [u, v, w] = new Set(["a", "b", "c"]);

// 事實上，只要某種數據結構具有Iterator接口，都可以採用陣列形式的解構賦值

function* fibs() {
	var a = 0;
	var b = 1;
	while(true) {
		yield a;
		[a, b] = [b, a+b];
	}
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth); // 5

// fibs是一個Generator函數，原生具有Iterator接口。解構賦值會依次從這個接口獲取值