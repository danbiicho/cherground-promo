import { inject, injectable } from "inversify";
import { RequestOrder } from "domain/use-case";
import { OrderRepository } from "domain/interactor/repository";

@injectable()
export default class OrderImpl implements RequestOrder {
  private orderRepository: OrderRepository;

  constructor(
    @inject("OrderRepository")
    orderRepository: OrderRepository
  ) {
    this.orderRepository = orderRepository;
  }

  execute(userInput: object) {
    return this.orderRepository.requestOrder(userInput);
  }
}
