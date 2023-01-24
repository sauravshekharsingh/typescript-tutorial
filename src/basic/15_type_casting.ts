let leet;

leet = 1337;

const num = leet as number;

console.log(num); // '1337'
console.log(num === 1337); // false: the value num is still a string
// Because type assertion is not equivalent to typecasting

// Typecasting using JS features
const num2 = +leet;
console.log(num2); // 1337

export {};
