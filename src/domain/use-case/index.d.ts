import { User } from "domain/entity";

export interface GetUser {
  execute(email: string, password: string): Promise<User>;
}
