type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

// function isSquare(shape: Shape): boolean {
//     return "size" in shape;
// }
// User defined type guard
function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}

function isRectangle(shape: Shape): shape is Rectangle {
  return "width" in shape;
}

function area(shape: Shape) {
  // Not explicitly clear if something is a 'Square' or a 'Rectangle'
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }
  const _ensure: never = shape;
  return _ensure;
}
