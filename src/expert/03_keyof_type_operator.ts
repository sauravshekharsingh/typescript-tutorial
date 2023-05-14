type Person = {
  name: string;
  age: number;
  location: string;
};

const john: Person = {
  name: "John",
  age: 35,
  location: "Melbourne",
};

type PersonKeys = keyof Person;
function logGet(obj: any, key: PersonKeys) {
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

const age = logGet(john, "age"); // 35
// const email = logGet(john, "email"); // Error

function logGetNew<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log("Getting:", key, value);
  return value;
}

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting:", key, value);
  obj[key] = value;
}

logSet(john, "age", 36);
// logSet(john, "email", ""); // Error
