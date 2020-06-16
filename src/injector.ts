import { Container } from "inversify";

import { GetUser } from "domain/use-case";
import { EnrollUser } from "domain/use-case";

import { UserRepository } from "domain/interactor/repository";
import { UserSignupRepository } from "domain/interactor/repository";

import { UserApi } from "data/remote/api";
import { SignUpApi } from "data/remote/api";

import { UserViewModel } from "app/view-model/index";
import { UserSignupViewModel } from "app/view-model/index";

import GetUserImpl from "domain/use-case/user/GetUserImpl";
import UserRepositoryImpl from "data/repository-implementations/UserRepositoryImpl";
import UserApiImpl from "data/remote/api/UserApiImpl";
import UserViewModelImpl from "app/view-model/UserViewModelImpl";

import EnrollUserImpl from "domain/use-case/userSignup/EnrollUserImpl";
import UserSignupRepositoryImpl from "data/repository-implementations/UserSignupRepositoryImpl";
import SignupApiImpl from "data/remote/api/SignUpApiImpl";
import UserSignupViewModelImpl from "app/view-model/UserSignupViewModelImpl";

const container = new Container();

container.bind<EnrollUser>("EnrollUser").to(EnrollUserImpl);
container
  .bind<UserSignupRepository>("UserSignupRepository")
  .to(UserSignupRepositoryImpl);
container.bind<SignUpApi>("SignUpApi").to(SignupApiImpl);
container
  .bind<UserSignupViewModel>("UserSignupViewModel")
  .to(UserSignupViewModelImpl);

container.bind<GetUser>("GetUser").to(GetUserImpl);
container.bind<UserRepository>("UserRepository").to(UserRepositoryImpl);
container.bind<UserApi>("UserApi").to(UserApiImpl);
container.bind<UserViewModel>("UserViewModel").to(UserViewModelImpl);

export default container;
