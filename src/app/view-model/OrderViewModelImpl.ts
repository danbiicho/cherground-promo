import { inject, injectable } from "inversify";
import { OrderViewModel } from "app/view-model";
import { RequestOrder } from "domain/use-case";

@injectable()
export default class OrderViewModelImpl implements OrderViewModel {
  private ucRequestOrder: RequestOrder;

  constructor(@inject("RequestOrder") ucRequestOrder: RequestOrder) {
    this.ucRequestOrder = ucRequestOrder;
  }

  displayOrderView(userInput: object) {
    return this.ucRequestOrder.execute(userInput);
  }
}
