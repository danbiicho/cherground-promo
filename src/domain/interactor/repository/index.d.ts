import { User } from "domain/entity";
import { UserSignup } from "domain/entity";

export interface UserRepository {
  getUser(): Promise<User>;
}

export interface UserSignupRepository {
  enrollUser(userInput: object): Promise<UserSignup>;
}
