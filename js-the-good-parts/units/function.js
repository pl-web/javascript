// Function
console.log('---------------------------');
console.log('function-unit');
// --------------------------
console.log(Function);
const foo = () => {};
console.log(foo === Function.prototype);

// Invocation Pattern

// The Method Invocation Pattern
const folwer = {
  name: 'peach flower',
  season: 'spring and summer',
  getFlowerName() {
    return this.name;
  }
};

folwer.getFlowerName();



// The Function Invocation Pattern
const str = new String