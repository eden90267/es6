// 如果真的想將對象凍結，應該使用Object.freeze方法
const foo = Object.freeze({});

// 常規模式，下面這一行不起作用;
// 嚴格模式，該行會報錯
foo.prop = 123;

console.log(foo.prop);


// 除了將對象本身凍結，對象的屬性也應該凍結。下面是一個將對象徹底凍結的函數
var constantize = (obj) => {
	Object.freeze(obj);
	Object.keys(obj).forEach((key, value) => {
		if (typeof obj[key] === 'object') {
			constantize(obj[key]);
		}
	});
};


// ES5僅有兩種宣告變數的方法: var命令與function命令
// ES6增加了let、const命令外，另外兩種宣告變數的方法: import和class命令，所以ES6一共有6種宣告變數的方法