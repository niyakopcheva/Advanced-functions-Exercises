function sum(arg1, arg2, arg3, arg4){
    return arg1 + arg2 + arg3 + arg4;
}

function partialSum(arg) {
    return function(arg2, arg3, arg4){
        return sum(arg, arg2, arg3, arg4);
    }
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
