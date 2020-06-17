import { injectable } from "inversify";
import { Order } from "domain/entity";
import { OrderApi } from "data/remote/api";
import * as ApiManager from "./manager/ApiManager";

@injectable()
export default class OrderApiImpl implements OrderApi {
  sendOrderRequest(userInfo: object): Promise<Order> {
    return ApiManager.request({
      url: `${ApiManager.BASE_URL}/${ApiManager.URL_ORDER}`,
      method: "POST",
      data: { ...userInfo },
    });
  }
}
