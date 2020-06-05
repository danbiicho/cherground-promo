import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import DropDownBox from "app/view/widgets/DropDownBox";
import SearchBox from "app/view/widgets/SearchBox";
import PromotionHeader from "app/view/widgets/PromotionHeader";
import OrderStatusViewLayout from "app/view/components/orderstatus-view/OrderStatusViewLayout";
import TitleContLayout from "app/view/components/orderstatus-view/TitleContLayout";
import StatusContLayout from "app/view/components/orderstatus-view/StatusContLayout";
import ListBox from "app/view/components/asset/listBox/ListBox";
import Tab from "app/view/widgets/Tab";
import TabContainerLayout from "app/view/components/orderstatus-view/TabContainerLayout";
import OrderInputButton from "app/view/widgets/OrderInputButton";

const OrderStatusView: React.FunctionComponent<RouteComponentProps> = (
  props
) => {
  const [tabIdx, setTabIdx] = useState(1);

  const tabChangeHandler = (status: string) => {
    if (status === "완료") {
      setTabIdx(2);
    } else {
      return;
    }
  };

  return (
    <>
      <PromotionHeader />
      <OrderStatusViewLayout>
        <TitleContLayout>제작 주문</TitleContLayout>
        <TabContainerLayout>
          <Tab status={"진행중"} active onClickHandler={tabChangeHandler} />
          <Tab
            status={"완료"}
            active={false}
            onClickHandler={tabChangeHandler}
          />
        </TabContainerLayout>
        <StatusContLayout>
          <DropDownBox />
          <SearchBox />
          <OrderInputButton />
        </StatusContLayout>
        <ListBox />
        <ListBox />
      </OrderStatusViewLayout>
    </>
  );
};

export default OrderStatusView;
