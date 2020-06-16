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
