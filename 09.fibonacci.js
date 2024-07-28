function getFibonacci(){
    let current = 1;
    let previous = 0;
    return function(){
        if(previous === 0){
            previous = 1;
            return 1;
        }
        
        return current;
    }
    
}
let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
