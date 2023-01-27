// Express BASE
export interface Request {
  body: any;
}

// Express JSON middleware
export interface Request {
  json: any;
}

// TypeScript merges both declarations into a single interface
// that has both of the properties

// App
function handleRequest(req: Request) {
  req.body;
  req.json;
}

export {};
