// const命令宣告的常數也是不提升，同樣存在暫時性死區，只能在宣告的位置後面使用。
if (true) {
	console.log(MAX); // ReferenceError: MAX is not defined
	const MAX = 5;
}