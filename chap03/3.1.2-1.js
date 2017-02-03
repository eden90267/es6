// 解構賦值允許指定默認值
var [foo = true] = [];
console.log(foo);

[x, y = 'b'] = ['a'];
// [x, y = 'b'] = ['a', undefined];
console.log(x); // x='a'
console.log(y); // y='b'