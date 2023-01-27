/* -------------------------------- Interface ------------------------------- */

export interface InputProps {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

/* ---------------------------------- Types --------------------------------- */

export type InputProps2 = {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
};

// OR

type InputType = "text" | "email";

type InputValue = string;

type InputOnChange = (newValue: string) => void;

export type InputProps3 = {
  type: InputType;
  value: InputValue;
  onChange: InputOnChange;
};

// Because interfaces have a body, they do not support the feature
// of using external type declarations

export {};
