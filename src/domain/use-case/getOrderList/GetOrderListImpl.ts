import { inject, injectable } from "inversify";
import { GetOrderList } from "domain/use-case";
import { OrderListRepository } from "domain/interactor/repository";

@injectable()
export default class GetOrderListImple implements GetOrderList {
  private orderListRepository: OrderListRepository;

  constructor(
    @inject("OrderListRepository")
    orderListRepository: OrderListRepository
  ) {
    this.orderListRepository = orderListRepository;
  }

  execute() {
    return this.orderListRepository.getOrderList(email);
  }
}
