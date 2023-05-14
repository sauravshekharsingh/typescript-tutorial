type SubmitRequest = {
  type: string;
  personal: {
    name: {
      firstName: string;
      lastName: string;
    }[];
  };
  payment: {
    creditCardToken: string;
  };
};

type Name = SubmitRequest["personal"]["name"][0];
type Payment = SubmitRequest["payment"];

export function getPayment(): Payment {
  return {
    creditCardToken: "1234",
  };
}

export {};
