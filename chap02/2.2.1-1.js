// 塊級作用域

// ES5只有 全局作用域 和 函數作用域，沒有塊級作用域，這帶來很多不合理的場景

var tmp = new Date();

function f() {
	console.log(tmp);
	if (false) {
		var tmp = "hello world";
	}
}

f(); // undefined，原因在於變數提升，導致內層的tmp變數覆蓋了外層的tmp變數