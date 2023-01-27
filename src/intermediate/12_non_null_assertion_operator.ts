type Point = {
  x: number;
  y: number;
};

let point: Point;

function initialize() {
  point = { x: 0, y: 0 };
}

initialize();
console.log(`Point: ${(point!.x, point!.y)}`); // Error: point used before assigned
// FIX: Non-null assertion operator
// Just like other type assertion non-null is only compile time
// and have no runtime impact

type Person = {
  name: string;
  email?: string | null | undefined;
};

function sendMail(email: string) {
  console.log(`Sent email to ${email}`);
}

function ensureContactable(person: Person) {
  if (person.email == null)
    throw new Error(`Person: ${person.name} is not contactable`);
}

function contact(person: Person) {
  ensureContactable(person);
  // sendMail(person.email); // Error
  // FIX: Add a '!'
  sendMail(person.email!);
}

export {};
