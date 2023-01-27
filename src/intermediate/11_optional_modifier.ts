type Person = {
  name: string;
  email: string;
  phone?: string; // Optional property
};

const john: Person = {
  name: "John",
  email: "john@gmail.com",
  phone: "123456",
};

const jane: Person = {
  name: "Jane",
  email: "jane@gmail.com",
};

console.log(jane.phone); // undefined
// TS automatically assigs undefined to optional properties

// jane.phone = null; // Error
// FIX

type Person2 = {
  name: string;
  email: string;
  phone?: string | null; // Optional property
};

const jane2: Person2 = {
  name: "Jane2",
  email: "jane2@gmail.com",
};

jane2.phone = null;

export {};
