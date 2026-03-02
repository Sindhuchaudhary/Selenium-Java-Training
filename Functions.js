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
