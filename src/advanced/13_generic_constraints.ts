type NameFields = { firstName: string; lastName: string };

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const john = addFullName({
  email: "",
  firstName: "",
  lastName: "",
});

// const jane = addFullName({
//   email: "",
// });
// Error

export {};
