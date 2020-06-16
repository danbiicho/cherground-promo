import { injectable } from "inversify";
import { UserSignup } from "domain/entity";
import { SignUpApi } from "data/remote/api";
import * as ApiManager from "./manager/ApiManager";

@injectable()
export default class SignUpApiImpl implements SignUpApi {
  sendSignUpUserInfo(userInfo: object): Promise<UserSignup> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/${ApiManager.URL_SIGNUP}`,
      method: "POST",
      data: { ...userInfo },
    });
  }
}
