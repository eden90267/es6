function f() {
	console.log('I am outside!');
}

(function () {
	if (false) {
		// 重複宣告一次函數f
		function f() { console.log('I am inside!'); }
	}

	f();
}());

// ES5 : I am inside!
// ES6 : I am outside!

// 此種方式對老代碼產生極大影響，為減輕不兼容問題，ES6規定，瀏覽器的實現可以不遵守上面規定，有自己的行為方式
// 1. 允許在塊級作用域內宣告函數
// 2. 函數宣告類似於var，即會提升到全局作用域或函數作用域的頭部
// 3. 同時，函數宣告還會提升到所在的塊級作用域的頭部

// chrome會報錯