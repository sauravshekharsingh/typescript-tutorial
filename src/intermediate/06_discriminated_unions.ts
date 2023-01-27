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

function area(shape: Shape) {
  // Cannot use instance of because the objects
  // are not created by class constructor

  if ("size" in shape) {
    // TS infers that shape must be a 'Square'
    return shape.size * shape.size;
  }

  if ("width" in shape) {
    // TS infers that shape must be a 'Rectangle'
    return shape.width * shape.height;
  }
}

/* --------------------------------- Problem -------------------------------- */

// Checking 'width' in 'Shape' does not intuitively
// tell us that the shape is a 'Square'

/* -------------------------------- Solution -------------------------------- */

// Discriminated Unions - Add a property with the same name to all the
// types in the union but with different literal values

/* --------------------------------- Example -------------------------------- */

function area2(shape: Shape) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
}

export {};
