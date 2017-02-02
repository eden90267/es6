// ES6的塊級作用域允許宣告函數的規則，只在大括號的情況下成立，否則就會報錯

'use strict';

// 不報錯
if (true) {
	function f() {
		// body...
	}
}

// 報錯
if (true)
	function f() {
		// body...
	}