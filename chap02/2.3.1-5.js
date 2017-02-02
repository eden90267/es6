// 對於複合類型的變數，變數名稱不指向資料，而是指向資料所在的的地址。
// const命令只是保證變數名稱指向的地址不變，並不保證該地址的資料不變。

const foo = {};
foo.prop = 123;

foo.prop
// 123

foo = {}; // TypeError: Assignment to constant variable.


// example
const a = [];
a.push('Hello'); // 可執行
a.length = 0;    // 可執行
a = ['Dave'];    // 報錯