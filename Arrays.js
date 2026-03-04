//Arrays
//set of values
let arr1 = [4,23,"False",false,undefined,5.234]
console.log(arr1);
//adds the data
console.log(arr1.concat(500,200,"Data"));
console.log(arr1.includes(false));
console.log(arr1.indexOf(500));
console.log(arr1.lastIndexOf(undefined));
console.log(arr1.reverse());
console.log(arr1.at(5));
arr1 = new Array(10);
arr1.fill(400);
console.log(arr1);
arr1.push(900,800,700);
console.log(arr1[900]);
arr1[800] = 900;
console.log(arr1);
//push is add values to end and unshift is add values at start
arr1.unshift(600);
//shift is remove values at start and pop is to remove the value at end
arr1.shift();
arr1.pop();
console.log("******************************");
//Filter Function
let arr10 = [4,2,10,2,5];
function filterOddNumbers(s)
{
    return s%2==0;
}

let filteredArray = arr10.filter(s=> filterOddNumbers(s));
console.log(filteredArray);
//Map
//It is used to transform the data from one form to another form
let transformedArray = arr10.map(s => s*2);
console.log(transformedArray);
//Reduce
//It is used to reduce the data to single value
arr10 = [90,20,40,50];
let sumOfData = arr10.reduce((a,b) => a+b);
console.log(sumOfData);




