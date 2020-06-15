import { User } from "domain/entity";

export interface UserRepository {
  getUser(): Promise<User>;
}
