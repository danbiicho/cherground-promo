import { inject, injectable } from "inversify";
import { UserSignupViewModel } from "app/view-model";
import { EnrollUser } from "domain/use-case";

@injectable()
export default class UserSignupViewModelImpl implements UserSignupViewModel {
  private ucEnrollUser: EnrollUser;

  constructor(@inject("EnrollUser") ucEnrollUser: EnrollUser) {
    this.ucEnrollUser = ucEnrollUser;
  }

  displayUserSignup(userInput: object) {
    return this.ucEnrollUser.execute(userInput);
  }
}
