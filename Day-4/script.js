//Loops
//Fibonacci Generator

function fibonacciGenerator (n){
  let arr = [];
     if(n === 1){
       arr.push(0);
     }else if(n === 2){
       arr.push(0,1);
     }else{
       arr.push(0,1);
    for(let i = 2; i < n; i++){
       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
     }
  }
  return arr;
}

//console.log(fibonacciGenerator(5));