//Strings-->Collection of letters,numbers,spl characters in a sentence
//Dif types of data types in JS
//Primitive Data Types
//1.Number
//2.String
//3.Null
//4.Boolean
//5undefined
//6.Symbol
//7.BigInt

//Non Primitive Data Types
//1.Object
//2.Array
//3.Function
//4.Set,Map
//5.Date and Reg Exp
let s3 = "Understanding the new set of information about Strings";
console.log(s3.length);
console.log(s3.toUpperCase);
console.log(s3.toLowerCase);
console.log(s3.concat(" Yes it is!"));
console.log(s3.includes("new"));
console.log(s3.charAt(10));
console.log(s3.charAt(900));
//console.log(s3.repeat(6));
console.log(s3.replace('a','u'));
console.log(s3.replaceAll('a','z'));
console.log(s3.substring(6));
console.log(s3.substring(10,20));
console.log(s3.indexOf('i'));
console.log(s3.lastIndexOf('s'));
s3 = "     Sample sets of Data     ";
console.log(s3.trim());
console.log(s3.trimStart());
console.log(s3.trimEnd());
s3 = "You look amazing";
console.log(s3.at(10));