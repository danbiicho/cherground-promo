import { inject, injectable } from "inversify";
import { User } from "domain/entity";
import { UserApi } from "data/remote/api";
import { UserRepository } from "domain/interactor/repository";

@injectable()
export default class UserRepositoryImpl implements UserRepository {
  private userApi: UserApi;

  constructor(@inject("UserApi") userApi: UserApi) {
    this.userApi = userApi;
  }

  getUser(): User[] {
    return this.userApi.getUser();
  }
}
