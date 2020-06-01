import { User } from "domain/entity";

export interface GetUser {
  execute(): User[];
}
