const stringManipulator = {
    setVal:'',
    setValue(val){
        this.setVal = val;
        return this;
    },
    toUpperCase(){
        this.setVal = this.setVal.toUpperCase();
        return this;
    },
    print(){
        console.log(this.setVal);
        return this;
    },
    toLowerCase(){
        this.setVal = this.setVal.toLowerCase();
        return this;
    }
}

stringManipulator.setValue('Hello')
  .toUpperCase()
  .print()
  .toLowerCase()
  .print();

// HELLO
//  hello
