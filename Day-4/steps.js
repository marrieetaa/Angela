//The function fibonacciGenerator is defined and accepts one parameter, n.
//n represents the number of Fibonacci numbers you want to generate.
function fibonacciGenerator (n){
  //An empty array <output> is initialized to store the Fibonacci sequence
  let output = [];
  //If n is 1: Only the first Fibonacci number is added to <output>, which is 0.
  // n is 2: The first two Fibonacci numbers (0 and 1) are added to <output>.
     if(n === 1){
       output.push(0);
     }else if(n === 2){
       output.push(0,1);
  //For values of n greater than 2:
  //Start by adding the first two Fibonacci numbers (0 and 1) to the array.
     }else{  
       output.push(0,1);
   //A for loop is used to calculate the remaining Fibonacci numbers.
  // Loop Logic:
  // Start from i = 2 because the first two numbers (0 and 1) are already in the array.
  // Continue until i < n, ensuring exactly n numbers are generated.
    for(let i = 2; i < n; i++){
  //// Formula: The next Fibonacci number is the sum of the last two numbers in the array:
  // output[output.length - 1]: The most recent number in the array.
  // output[output.length - 2]: The second-to-last number in the array.
  // Push the sum into the array using arr.push().           
       output.push(output[output.length - 1] + output[output.length - 2]);
     }
  }
  //After the loop completes, the function returns the <output>, which now contains the first n Fibonacci numbers.
  return output;
}

console.log(fibonacciGenerator(5));

// fibonacciGenerator(5)
// Step 1: arr is initialized as an empty array.
// Step 2: Since n > 2, the first two numbers (0 and 1) are added to arr: [0, 1].
// Step 3: The loop starts from i = 2 and calculates the remaining numbers:
// Iteration 1 (i = 2):
// Add arr[1] + arr[0] → 1 + 0 = 1.
// arr becomes [0, 1, 1].
// Iteration 2 (i = 3):
// Add arr[2] + arr[1] → 1 + 1 = 2.
// arr becomes [0, 1, 1, 2].
// Iteration 3 (i = 4):
// Add arr[3] + arr[2] → 2 + 1 = 3.
// arr becomes [0, 1, 1, 2, 3].
// Output: [0, 1, 1, 2, 3]
//-------------------------------------------------
// Final Summary:
// Input: The function takes a number n.
// Output: It returns an array containing the first n Fibonacci numbers.
// Logic:
// Start with an empty array.
// Add the first two numbers manually if n is 1 or 2.
// Use a loop for larger n to generate the sequence using the formula:
// Next Number = Sum of the Last Two Numbers in the Array.
// Return the array once the sequence is complete.

//==================================================