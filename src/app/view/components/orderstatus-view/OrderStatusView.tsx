import React from "react";
import { RouteComponentProps } from "react-router-dom";
import DropDownBox from "app/view/widgets/DropDownBox";
import SearchBox from "app/view/widgets/SearchBox";
import PromotionHeader from "app/view/widgets/PromotionHeader";
import OrderStatusViewLayout from "app/view/components/orderstatus-view/OrderStatusViewLayout";
import TitleContLayout from "app/view/components/orderstatus-view/TitleContLayout";
import StatusContLayout from "app/view/components/orderstatus-view/StatusContLayout";

const OrderStatusView: React.FunctionComponent<RouteComponentProps> = (
  props
) => {
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
