// JavaScript is known for having a “duck typing” system and TypeScript for following
// something known as “structural typing”. Any object expected by a function will be accepted
// by the properties it has and not by its real value.

// https://www.typescriptlang.org/docs/handbook/type-compatibility.html

type User = { id: string };
type Product = { id: string };

let user: User = { id: "user_2dabsa2242bhdasa" };
let product: Product = { id: "product_2dabsa2242bhdasa" };

user = product;
product = user;
// Possible because they have the same structure
// and type compatibility

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 1 };
let point3D: Point3D = { x: 1, y: 2, z: 4 };

// Extra info is okay
point2D = point3D;
// 3D point can also be passed as an argument
function takesPoint2D(point: Point2D) {}
takesPoint2D(point3D);

// point3D = point2D; // Error: missing info
function takesPoint3D(point: Point3D) {}
// takesPoint3D(point2D); // Error: missing info

export {};
