const fail = (message: string) => {
  throw new Error(message);
};

// TS infers that the return type is 'never' because the function
// never returns a value

const sing = () => {
  while (true) {
    console.log("Lyrics");
  }
};

// let example: never = 123456; // Error

/* ------------ Also helps in ensuring that all cases are handled ----------- */

type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function area(s: Shape) {
  // const _ensureAllCasesHandled: never = s;
  // PROBLEM: throws error because it thinks not all cases
  // are handled and thus s is not definitely empty
  // SOLUTION
  if (s.kind === "square") {
    return s.size * s.size;
  } else if (s.kind === "rectangle") {
    return s.width * s.height;
  }

  const _ensureAllCasesHandled: never = s; // No error
  // Helps in further declarations
}

export {};
