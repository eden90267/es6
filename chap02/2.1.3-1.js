// 暫時性死區(temporal dead zone)


var tmp = 123;

if (true) {
	// tmp = 'abc'; // ReferenceError: tmp is not defined
	let tmp; // 只要塊級作用域存在let命令，他所聲明的變數就"綁定"(binding)這個區域，不再受外界的影響
	tmp = 'abc';
	console.log(tmp); // 'abc'
}

console.log(tmp); // 123

// 暫時性死區也意味著typeof不再是百分之一百的安全操作
// TDZ開始
// typeof x; // ReferenceError: x is not defined
let x; // TDZ結束

// 如果一個變數沒有被宣告，使用typeof反而不會報錯
console.log(typeof undeclared_variable); // "undefined"


// 隱藏死區
// function bar(x = y, y = x) { // ReferenceError: y is not defined
// 	return [x, y];
// }

// bar();



// 暫時性死區 的本質：只要一進入當前作用域，所要使用的變數就已經存在，但是不可存取，只有等到宣告變數的那一行代碼出現，才可以存取和使用該變數



// 不允許在相同作用域重複宣告
function f1() {
	let a = 10;
	// var a = 1;
}

function f2() {
	let a = 10;
	// let a = 1; // SyntaxError: Identifier 'a' has already been declared
}

function func(arg) {
	// let arg; // SyntaxError: Identifier 'arg' has already been declared
}

function func(arg) {
	{
		let arg; // 不報錯
	}
}