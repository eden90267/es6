// 考慮到環境導致的行為差異，應該避免在塊級作用域內宣告函數。如果確實需要，也應該寫成函數表達式，而不是函數宣告語句

// 函數宣告語句
{
	let a = 'secret';
	function f() {
		return a;
	}
}

// 函數表達式
{
	let a = 'secret';
	let f = function () {
		return a;
	}
}