export interface User {
  email: string;
  password: string;
}

export interface UserSignup {
  userInput: {
    name: string;
    phone_number: string;
    address: string;
    email: string;
    password: string;
  };
}

export interface Order {
  request: {
    userEmail: string;
    ordinal: null;
    brandName: string;
    styleName: string;
    color: string;
    quantity: 1;
    memo: string;
    image: string;
    categoryName: string;
    requestStatusName: string;
  };
}
