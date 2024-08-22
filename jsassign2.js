// Assignment functions -2   28/6/2024


// question 1
// Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

var readlineSync = require("readline-sync");
var x = readlineSync.question("enter a number:");
var x = parseInt(x)

let i
let  fact = 1

for(i=x;i>0;i--){
    fact=fact*i
}
console.log(fact);

// question 2
// Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.  

let arr1=[2,3,4,5]
let output=[]
function doble(){
  for(i=0;i<arr1.length;i++){
output.push(arr1[i]*2)
  }
  return output
}
console.log(doble(arr1));

// question 3
// Define a function expression factorial that takes one number as a parameter and returns its factorial.  

function factorial(a){

    let i
    let  fact = 1
    
    for(i=a;i>0;i--){
        fact=fact*i
    }
    return fact
    }
    
    console.log(factorial(5));

    // question 4
    // Write a function processArray that takes an array and a callback function as parameters. The function should apply the callback function to each element of the array and return a new array with the results. Use an anonymous function as the callback to double each number in the array.

    let arr=[1,2,3,4,5]
let newarr=[]

function processArray(arr,double){

  for(let i=0;i<arr.length;i++){
newarr.push(double(arr[i]))
  }
console.log(newarr);
}


function double(element){
  return element*2
}

processArray([1,2,3,4,5],double)