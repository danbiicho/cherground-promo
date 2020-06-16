import { inject, injectable } from "inversify";
import { UserSignup } from "domain/entity";
import { SignUpApi } from "data/remote/api";
import { UserSignupRepository } from "domain/interactor/repository";

@injectable()
export default class UserSignupRepositoryImpl implements UserSignupRepository {
  private signupApi: SignUpApi;

  constructor(@inject("SignUpApi") signupApi: SignUpApi) {
    this.signupApi = signupApi;
  }

  enrollUser(userinput: object): Promise<UserSignup> {
    return this.signupApi.sendSignUpUserInfo(userinput);
  }
}
