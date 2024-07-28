function createPrivateCounter(){
    let count = 0;
    let counter = {
        getCount(){
            return count;
        },
        increment(){
            count++;
        }
    }
    return counter;
}
const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
