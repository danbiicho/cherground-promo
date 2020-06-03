import React from "react";
import { RouteComponentProps } from "react-router-dom";
import DropDownBox from "app/view/widgets/DropDownBox";
import SearchBox from "app/view/widgets/SearchBox";
import PromotionHeader from "app/view/widgets/PromotionHeader";
import { OrderstatusViewLayout } from "./OrderstatusViewLayout";

const OrderStatusView: React.FunctionComponent<RouteComponentProps> = (
  props
) => {
  const {
    OrderStatusViewLayout,
    TitleContLayout,
    StatusContLayout,
  } = OrderstatusViewLayout;
  return (
    <>
      <PromotionHeader />
      <OrderStatusViewLayout>
        <TitleContLayout>제작 주문</TitleContLayout>
        <StatusContLayout>
          <DropDownBox />
          <SearchBox />
        </StatusContLayout>
      </OrderStatusViewLayout>
    </>
  );
};

export default OrderStatusView;
