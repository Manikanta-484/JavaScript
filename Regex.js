// `.` (dot):
const regex = /h.t/;
console.log(regex.test("hat")); // true
console.log(regex.test("hot")); // true
console.log(regex.test("hit")); // true
console.log(regex.test("heat")); // false
console.log("hat hot hit heat".match(/h.t/g)); // ['hat', 'hot', 'hit']

// `*` (asterisk):
const regex2 = /ab*c/;
console.log(regex2.test("ac")); // true
console.log(regex2.test("abc")); // true
console.log(regex2.test("abbc")); // true
console.log(regex2.test("abbbc")); // true
console.log("ac abc abbc abbbc".match(/ab*c/g)); // ['ac', 'abc', 'abbc', 'abbbc']

// `+` (plus):
const regex3 = /ab+c/;
console.log(regex3.test("abc")); // true
console.log(regex3.test("abbc")); // true
console.log(regex3.test("abbbc")); // true
console.log(regex3.test("ac")); // false
console.log("abc abbc abbbc ac".match(/ab+c/g)); // ['abc', 'abbc', 'abbbc']

// `?` (question mark):
const regex4 = /colou?r/;
console.log(regex4.test("color")); // true
console.log(regex4.test("colour")); // true
console.log("color colour".match(/colou?r/g)); // ['color', 'colour']

// `^` (caret):
const regex5 = /^Hello/;
console.log(regex5.test("Hello World")); // true
console.log(regex5.test("Say Hello")); // false
console.log("Hello World\nSay Hello".match(/^Hello/gm)); // ['Hello']

// `$` (dollar):
const regex6 = /World$/;
console.log(regex6.test("Hello World")); // true
console.log(regex6.test("World Championship")); // false
console.log("Hello World\nWorld Championship".match(/World$/gm)); // ['World']

// `[]` (square brackets):
const regex7 = /[aeiou]/;
console.log(regex7.test("hello")); // true
console.log(regex7.test("why")); // false
console.log("hello world".match(/[aeiou]/g)); // ['e', 'o', 'o']

// `[^]` (caret in square brackets):
const regex8 = /[^0-9]/;
console.log(regex8.test("abc123")); // true
console.log(regex8.test("123")); // false
console.log("abc123".match(/[^0-9]/g)); // ['a', 'b', 'c']

// `{n}` (curly braces):
const regex9 = /a{3}/;
console.log(regex9.test("aa")); // false
console.log(regex9.test("aaa")); // true
console.log(regex9.test("aaaa")); // true
console.log("aa aaa aaaa".match(/a{3}/g)); // ['aaa', 'aaa']

// `{n,m}` (curly braces with comma):
const regex10 = /a{2,4}/;
console.log(regex10.test("a")); // false
console.log(regex10.test("aa")); // true
console.log(regex10.test("aaa")); // true
console.log(regex10.test("aaaa")); // true
console.log(regex10.test("aaaaa")); // true
console.log("a aa aaa aaaa aaaaa".match(/a{2,4}/g)); // ['aa', 'aaa', 'aaaa', 'aaaa']

// `|` (pipe):
const regex11 = /cat|dog/;
console.log(regex11.test("I have a cat")); // true
console.log(regex11.test("I have a dog")); // true
console.log(regex11.test("I have a bird")); // false
console.log("I have a cat and a dog".match(/cat|dog/g)); // ['cat', 'dog']
