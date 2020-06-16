import { User } from "domain/entity";

export interface UserRepository {
  // getUser(): Promise<User>;

  signIn(email: string, password: string): Promise<User>;
}
