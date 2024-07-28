const double = (num) => num * 2;
const square = (num) => Math.pow(num, 2);
function compose(...funcs) {
    return function(initialArg) {
        return funcs.reduce((acc, func) => func(acc), initialArg);
    };
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36
