import { inject, injectable } from "inversify";
import { Order } from "domain/entity";
import { OrderApi } from "data/remote/api";
import { OrderRepository } from "domain/interactor/repository";

@injectable()
export default class OrderRepositoryImpl implements OrderRepository {
  private orderApi: OrderApi;

  constructor(@inject("OrderApi") orderApi: OrderApi) {
    this.orderApi = orderApi;
  }

  requestOrder(userInput: object): Promise<Order> {
    return this.orderApi.sendOrderRequest(userInput);
  }
}
