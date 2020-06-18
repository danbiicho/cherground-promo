import { User, UserSignup, Order, OrderList } from "domain/entity";

export interface UserApi {
  // getUser(): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
}

export interface SignUpApi {
  sendSignUpUserInfo(userInfo: object): Promise<UserSignup>;
}

export interface OrderApi {
  sendOrderRequest(userInfo: object): Promise<Order>;
}

export interface OrderListApi {
  getOrderList(email: string): Promise<OrderList>;
}
