// ES6為改變全局對象的屬性賦值與全局變數賦值是同一件事的問題，一方面規定，為保兼容性，var命令和function命令宣告的全局變數，依舊是全局對象的屬性；
// 另一方面規定，let、const、class命令宣告的全局變數，不屬於全局對象的屬性。
// 也就是說，從ES6開始，全局變數將逐步與全局對象的屬性脫鉤

var a = 1;

console.log(window.a); // 1

let b = 1;
console.log(window.b); // undefined