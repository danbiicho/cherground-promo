import { User, UserSignup, Order } from "../../domain/entity";

export interface UserViewModel {
  displayUser(email: string, password: string): Promise<User>;
}

export interface UserSignupViewModel {
  displayUserSignup(userinput: object): Promise<UserSignup>;
}

export interface OrderViewModel {
  displayOrderView(userinput: object): Promise<Order>;
}
