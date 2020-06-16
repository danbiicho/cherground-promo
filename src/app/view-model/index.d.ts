import { User } from "../../domain/entity";
import { UserSignup } from "../../domain/entity";

export interface UserViewModel {
  displayUser(email: string, password: string): Promise<User>;
}

export interface UserSignupViewModel {
  displayUserSignup(userinput: object): Promise<UserSignup>;
}
