import { User } from "domain/entity";

export interface UserApi {
  getUser(): User[];
}
