// 解構不僅用在陣列，還可用在對象
var { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo); // "aaa"
console.log(bar); // "bbb"

// 對象的屬性沒有次序，變數必須與屬性同名，才能取到正確的值
var { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz); // undefined