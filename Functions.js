//Functions to perform certain logic
//for reusability purpose

//Named function
function display()
{
    console.log("Sindhu");
}
display();
function performAddition(a,b){
    return a+b;
}
console.log(performAddition(3,8));
//Unnamed function or function expression
const productOfNumbers = function (a,b){
    return a*b;
}
console.log(productOfNumbers(5,9));
//Arrow functions
const quotientOfNumbers = (a,b) => a/b;
console.log(quotientOfNumbers(20,15));
// Default parameters
function displayInformation(name,age = 27){
    console.log(`Name of the person is : ${name} and the age of the person is: ${age}`);
}
displayInformation("Sindhu");
//Callback function
//calling a function inside another function
function mathematicalOperations(a,b,op){
    return op(a,b);
}
let additionOfNumbers = (a,b,c) => a+b+c;
let subtractionOfNumbers = (a,b) => a-b;
let multiplicationOfNumbers = (a,b) => a*b;
let divisionOfNumbers = (a,b) => a/b;

let data = mathematicalOperations(50,30,additionOfNumbers);
let data1 = mathematicalOperations(10,30,subtractionOfNumbers);
let data2 = mathematicalOperations(40,20,multiplicationOfNumbers);
let data3 = mathematicalOperations(10,50,divisionOfNumbers);

console.log(data,data1,data2,data3);
console.log("50"-"30");
console.log("50"+"30");
let sampleInfo = mathematicalOperations(40,50,(a,b)=>a+b);
console.log(sampleInfo);
let sampledata = mathematicalOperations(30,20,(a,b) =>{
    function formulateData(a,b) 
    {
        return a+10;
    }
    return formulateData(a,b)+b;
});
console.log(sampledata);