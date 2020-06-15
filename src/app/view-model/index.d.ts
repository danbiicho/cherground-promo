import { User } from "../../domain/entity";

export interface UserViewModel {
  displayUser(): Promise<User>;
}
