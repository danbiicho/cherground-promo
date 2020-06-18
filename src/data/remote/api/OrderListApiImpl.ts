import { injectable } from "inversify";
import { OrderList } from "domain/entity";
import { OrderListApi } from "data/remote/api";
import * as ApiManager from "./manager/ApiManager";

@injectable()
export default class OrderListApiImpl implements OrderListApi {
  getOrderList(email: string): Promise<OrderList> {
    console.log(email);
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/requests/${email}`,
      method: "GET",
    });
  }
}
