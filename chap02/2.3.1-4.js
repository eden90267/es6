// const宣告的常數，也與let一樣不可重複宣告
var message = 'Hello';
let age = 25

const message = 'Goodbye!'; // SyntaxError: Identifier 'message' has already been declared
const age = 30; // SyntaxError: Identifier 'age' has already been declared