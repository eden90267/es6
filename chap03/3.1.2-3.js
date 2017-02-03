// 如果默認值是一個表達式，那麼這個表達式是惰性求值的，即只有在用到的時候，才會求值。
function f() {
	console.log('aaa');
}

// let [x = f()] = [1];

// console.log(x);

// 等價於下面代碼
let x;
if ([1][0] === undefined) {
	x = f();
} else {
	x = [1][0];
}

console.log(x);