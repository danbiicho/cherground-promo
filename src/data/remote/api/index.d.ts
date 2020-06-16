import { User } from "domain/entity";
import { UserSignup } from "domain/entity";

export interface UserApi {
  getUser(): Promise<User>;
}

export interface SignUpApi {
  sendSignUpUserInfo(userInfo: object): Promise<UserSignup>;
}
