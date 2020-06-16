import { User } from "domain/entity";
import { UserSignup } from "domain/entity";

export interface UserRepository {
  // getUser(): Promise<User>;

  signIn(email: string, password: string): Promise<User>;
}

export interface UserSignupRepository {
  enrollUser(userInput: object): Promise<UserSignup>;
}
