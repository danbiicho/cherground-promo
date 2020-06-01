import { inject, injectable } from "inversify";
import { UserViewModel } from "app/view-model";
import { GetUser } from "domain/use-case";
import { User } from "domain/entity";

@injectable()
export default class UserViewModelImpl implements UserViewModel {
  private ucGetUser: GetUser;

  constructor(@inject("GetUser") ucGetUser: GetUser) {
    this.ucGetUser = ucGetUser;
  }

  displayUser(): User[] {
    return this.ucGetUser.execute();
  }
}
