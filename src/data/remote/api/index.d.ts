import { User } from "domain/entity";
import { UserSignup } from "domain/entity";

export interface UserApi {
  // getUser(): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
}

export interface SignUpApi {
  sendSignUpUserInfo(userInfo: object): Promise<UserSignup>;
}
