import { User, UserSignup, Order } from "domain/entity";

export interface GetUser {
  execute(email: string, password: string): Promise<User>;
}

export interface EnrollUser {
  execute(userinput: object): Promise<UserSignup>;
}

export interface RequestOrder {
  execute(order: object): Promise<Order>;
}
