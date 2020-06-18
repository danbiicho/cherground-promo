import { User } from "domain/entity";
import { UserSignup } from "domain/entity";
import { Order } from "domain/entity";
import { OrderList } from "domain/entity";

export interface UserRepository {
  // getUser(): Promise<User>;

  signIn(email: string, password: string): Promise<User>;
}

export interface UserSignupRepository {
  enrollUser(userInput: object): Promise<UserSignup>;
}

export interface OrderRepository {
  requestOrder(userInput: object): Promise<Order>;
}

export interface OrderListRepository {
  getOrderList(email: string): Promise<OrderList>;
}
