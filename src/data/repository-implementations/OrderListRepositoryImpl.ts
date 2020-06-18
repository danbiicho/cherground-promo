import { inject, injectable } from "inversify";
import { OrderList } from "domain/entity";
import { OrderListApi } from "data/remote/api";
import { OrderListRepository } from "domain/interactor/repository";

@injectable()
export default class OrderListRepositoryImpl implements OrderListRepository {
  private orderListApi: OrderListApi;

  constructor(@inject("OrderListApi") orderListApi: OrderListApi) {
    this.orderListApi = orderListApi;
  }

  getOrderList(email: string): Promise<OrderList> {
    return this.orderListApi.getOrderList(email);
  }
}
