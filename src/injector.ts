import { Container } from "inversify";

import { GetUser } from "domain/use-case";
import { EnrollUser } from "domain/use-case";
import { RequestOrder } from "domain/use-case";
import { GetOrderList } from "domain/use-case";

import { UserRepository } from "domain/interactor/repository";
import { UserSignupRepository } from "domain/interactor/repository";
import { OrderRepository } from "domain/interactor/repository";
import { OrderListRepository } from "domain/interactor/repository";

import { UserApi } from "data/remote/api";
import { SignUpApi } from "data/remote/api";
import { OrderApi } from "data/remote/api";
import { OrderListApi } from "data/remote/api";

import { UserViewModel } from "app/view-model/index";
import { UserSignupViewModel } from "app/view-model/index";
import { OrderViewModel } from "app/view-model/index";
import { OrderListViewModel } from "app/view-model/index";

import GetUserImpl from "domain/use-case/user/GetUserImpl";
import UserRepositoryImpl from "data/repository-implementations/UserRepositoryImpl";
import UserApiImpl from "data/remote/api/UserApiImpl";
import UserViewModelImpl from "app/view-model/UserViewModelImpl";

import EnrollUserImpl from "domain/use-case/userSignup/EnrollUserImpl";
import UserSignupRepositoryImpl from "data/repository-implementations/UserSignupRepositoryImpl";
import SignupApiImpl from "data/remote/api/SignUpApiImpl";
import UserSignupViewModelImpl from "app/view-model/UserSignupViewModelImpl";

import OrderImpl from "domain/use-case/order/OrderImpl";
import OrderRepositoryImpl from "data/repository-implementations/OrderRepositoryImpl";
import OrderApiImpl from "data/remote/api/OrderApiImpl";
import OrderViewModelImpl from "app/view-model/OrderViewModelImpl";

import GetOrderListImpl from "domain/use-case/getOrderList/GetOrderListImpl";
import OrderListRepositoryImpl from "data/repository-implementations/OrderListRepositoryImpl";
import OrderListApiImpl from "data/remote/api/OrderListApiImpl";
import OrderListViewModelImpl from "app/view-model/OrderListViewModelImpl";

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

container.bind<RequestOrder>("RequestOrder").to(OrderImpl);
container.bind<OrderRepository>("OrderRepository").to(OrderRepositoryImpl);
container.bind<OrderApi>("OrderApi").to(OrderApiImpl);
container.bind<OrderViewModel>("OrderViewModel").to(OrderViewModelImpl);

container.bind<GetOrderList>("GetOrderList").to(GetOrderListImpl);
container
  .bind<OrderListRepository>("OrderListRepository")
  .to(OrderListRepositoryImpl);
container.bind<OrderListApi>("OrderListApi").to(OrderListApiImpl);
container
  .bind<OrderListViewModel>("OrderListViewModel")
  .to(OrderListViewModelImpl);

export default container;
