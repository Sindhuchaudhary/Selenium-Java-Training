let arr = [201,492,291,false,492,328]
//fetch odd numbers
let filteredArray = arr.filter(s => s%2!=0);
console.log(filteredArray);
//.map
//it is transform data from one form to another form
let transformedArray = arr.map(s =>s*s);
console.log(transformedArray);
//filter odd numbers and double each value
let filteredAndDoubledData = arr.filter(s=>s%2!=0).map(s=>s+s);
console.log(filteredAndDoubledData);
//reduce data to single entity
let productOfValues = arr.reduce((a,b) => a*b);
console.log(productOfValues);