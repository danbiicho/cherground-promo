import { Container } from "inversify";
import { GetUser } from "domain/use-case";

import { UserRepository } from "domain/interactor/repository";

import { UserApi } from "data/remote/api";

import { UserViewModel } from "app/view-model/index";

import GetUserImpl from "domain/use-case/user/GetUserImpl";
import UserRepositoryImpl from "data/repository-implementations/UserRepositoryImpl";
import UserApiImpl from "data/remote/api/UserApiImpl";
import UserViewModelImpl from "app/view-model/UserViewModelImpl";

const container = new Container();

container.bind<GetUser>("GetUser").to(GetUserImpl);
container.bind<UserRepository>("UserRepository").to(UserRepositoryImpl);
container.bind<UserApi>("UserApi").to(UserApiImpl);
container.bind<UserViewModel>("UserViewModel").to(UserViewModelImpl);

export default container;
