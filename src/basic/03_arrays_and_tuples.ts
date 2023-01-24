// --- Array ---
let array: Array<number> = [1, 2, 3];
let array2: number[] = [1, 2, 3];

// Usage
array = [1];
array = [1, 2, 3, 4, 5, 6];
// array = ["helloworld"]; // Error

// --- Tuple: Fixed length array ---
let tuple: [number, number] = [0, 0];

tuple = [1, 2];
// tuple = [1]; // Error
// tuple = [1, 2, 3]; // Error
// tuple = ['hello', 1] // Error

export {};
