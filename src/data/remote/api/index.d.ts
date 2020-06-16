import { User } from "domain/entity";

export interface UserApi {
  // getUser(): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
}
