import { User } from "domain/entity";
import { UserSignup } from "domain/entity";

export interface GetUser {
  execute(email: string, password: string): Promise<User>;
}

export interface EnrollUser {
  execute(userinput: object): Promise<UserSignup>;
}
