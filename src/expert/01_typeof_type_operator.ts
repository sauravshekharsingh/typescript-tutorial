const center = {
  x: 0,
  y: 0,
  z: 0,
};

type Point = {
  x: number;
  y: number;
  z: number;
};

// OR

type PointNew = typeof center;

// Later
const unit: Point = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
};

// Useful to infer types from API responses

export {};
