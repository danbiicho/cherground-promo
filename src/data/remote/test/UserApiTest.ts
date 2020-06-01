import { injectable } from "inversify";
import { User } from "domain/entity";
import { UserApi } from "data/remote/api";

@injectable()
export default class UserApiTest implements UserApi {
  getUser(): User[] {
    return [
      {
        id: "wecode",
        password: "wecode1234",
      },
      {
        id: "cher",
        password: "cher1234",
      },
    ];
  }
}
