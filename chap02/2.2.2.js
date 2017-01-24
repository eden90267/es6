// let實際上為JavaScript新增了塊級作用域

(function f1() {
	let n = 5;
	if (true) {
		let n = 10;
	}
	console.log(n); // 5
})();


// ES6允許塊級作用域的任意崁套
{{{
	{let insane = 'Hello World';}
	// console.log(insane); // 報錯
}}};

// 內層作用域可以定義外層作用域的同名變數
{{{
	let insane = 'Hello World';
	{let insane = 'Hello World';}
}}};

// 塊級作用域的出現，實際上使得廣泛運用的立即執行匿名函數(IIFE)不再必要了。