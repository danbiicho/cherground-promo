import { User } from "../../domain/entity";
import { UserSignup } from "../../domain/entity";

export interface UserViewModel {
  displayUser(): Promise<User>;
}

export interface UserSignupViewModel {
  displayUserSignup(userinput: object): Promise<UserSignup>;
}
