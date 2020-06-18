import { inject, injectable } from "inversify";
import { OrderListViewModel } from "app/view-model";
import { GetOrderList } from "domain/use-case";

@injectable()
export default class OrderListViewModelImpl implements OrderListViewModel {
  private ucGetOrderList: GetOrderList;

  constructor(@inject("GetOrderList") ucGetOrderList: GetOrderList) {
    this.ucGetOrderList = ucGetOrderList;
  }

  displayOrderListView(email: string) {
    return this.ucGetOrderList.execute(email);
  }
}
