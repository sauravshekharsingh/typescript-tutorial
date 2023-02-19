// console.log("ENVIRONMENT", process.env);

// Unable to identify 'process' and gives error

// declare const process: any;

// TypeScript supports these declarations in a separate file called
// the declarations file with the format '.d.ts'

console.log("NODE_ENV", process.env.NODE_ENV);

// NodeJS provides other modules like 'fs', 'os'
// To use all of these we can write

import fs from "fs";
fs.writeFileSync("./../static/abc.txt", "Some content");

// Also provides auto complete

// For other npm packages they can be simply installed and used
// But for some types need to be installed. Example - express

// import express from "express"; // Error: Cannot find module 'express' or its corresponding type declarations.

// FIX: npm i @types/express
import express from "express";

export {};
