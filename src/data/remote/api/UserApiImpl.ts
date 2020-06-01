import { injectable } from "inversify";
import { User } from "domain/entity";
import { UserApi } from "data/remote/api";

@injectable()
export default class UserApiImpl implements UserApi {
  getUser(): User[] {
    return [];
  }
}
