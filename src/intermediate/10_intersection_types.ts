type Point2D = {
  x: number;
  y: number;
};

// type Point3D = {
//   x: number;
//   y: number;
//   z: number;
// };

// Or Intersection types

type Point3D = Point2D & {
  z: number;
};

type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

function contact(details: Person & Email & Phone) {
  console.log("Name", details.name);
  console.log("Email", details.email);
  console.log("Phone", details.phone);
}

contact({
  name: "John",
  email: "john@gmail.com",
  phone: "1234",
});

export {};
