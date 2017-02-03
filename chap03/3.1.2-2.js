// ES6內部使用嚴格相等運算符(===)，判斷一個位置是否有值。所以，如果一個陣列成員不嚴格等於undefined，默認值是不會生效的
var [x = 1] = [undefined];
console.log(x);

var [y = 1] = [null];
console.log(y);