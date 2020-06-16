import { User } from "../../domain/entity";

export interface UserViewModel {
  displayUser(email: string, password: string): Promise<User>;
}
