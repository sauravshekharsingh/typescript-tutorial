function double(this: { value: number }) {
  this.value = this.value * 2;
}
// Important - 'this' needs to be the first parameter
// of the function

// 'this' is the calling context. Object that is implicitly passed
// to the JS function based on the calling context of the function

const valid = {
  value: 10,
  double,
};

valid.double();

console.log(valid.value);

const invalid = {
  valve: 10,
  double,
};

// invalid.double();
// Error

export {};
