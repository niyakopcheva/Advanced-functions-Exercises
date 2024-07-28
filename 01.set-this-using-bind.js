const obj1 = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const obj2 = {
    name: 'Bob'
};

const greetFunction = obj1.greet;

const greetBob = obj1.greet.bind(obj2);
greetFunction.call(obj2);


