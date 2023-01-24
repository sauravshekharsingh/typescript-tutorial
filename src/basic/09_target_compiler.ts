// JavaScript private fields feature
// Can be used on specefic JavaScript runtimes
// So depending on the compilerOptions target set in tsconfig.json
// the TypeScript file is transpiled to JavaScipt

// IMPORTANT: Not all TypeScript code can be transpiled to code that can
// be run on older JS runtimes. For example if target is ES5 then
// the private fields TS code is unable to transpile to JS

class Animal {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  public move(distanceInMetres: number): void {
    console.log(`${this.#name} moved ${distanceInMetres}m.`);
  }
}

export {};
