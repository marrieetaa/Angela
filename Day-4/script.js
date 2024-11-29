//Loops
//Fibonacci Generator
function fibonacciGenerator (n){
  let output = [];
     if(n === 1){
       output.push(0);
     }else if(n === 2){
       output.push(0,1);
     }else{
       output.push(0,1);
    for(let i = 2; i < n; i++){
       output.push(output[output.length - 1] + output[output.length - 2]);
     }
  }
  return output;
}

//console.log(fibonacciGenerator(5));