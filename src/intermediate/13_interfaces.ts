/* ---------------------------------- Type ---------------------------------- */

type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

const point: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};

/* -------------------------------- Interface ------------------------------- */

interface Point2DInterface {
  x: number;
  y: number;
}

interface Point3DInterface extends Point2DInterface {
  z: number;
}

const point2: Point3DInterface = {
  x: 0,
  y: 0,
  z: 0,
};

// Provides the same amount of safety as 'type' alias
// Interfaces only exist for compile time type checking
// and is not a JS feature. Reason for existence of 'interfaces'
// Familiarity for developers coming from other lang
// extends keyword and type hierarchy

export {};
