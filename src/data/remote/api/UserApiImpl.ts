import { injectable } from "inversify";
import { User } from "domain/entity";
import { UserApi } from "data/remote/api";
import * as ApiManager from "./manager/ApiManager";

@injectable()
export default class UserApiImpl implements UserApi {
  signIn(email: string, password: string): Promise<User> {
    console.log(email, password);
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/${ApiManager.URL_USER}`,
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    });
  }
}
