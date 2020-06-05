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
  const [tabIdxChanged, setTabIdxChanged] = useState(false);

  const labelText: string[] = [
    "대기",
    "원부자재 선택",
    "샘플 제작",
    "배송",
    "제작",
    "완료",
  ];
  // const labelText = {
  //   pending: "대기",
  //   textile: "원부자재 선택",
  //   sample: "샘플 제작",
  //   delivery: "배송",
  //   production: "제작",
  //   completion: "완료",
  // };

  const tabChangeHandler = (status: string) => {
    setTabIdxChanged(!tabIdxChanged);
  };

  const arrc = labelText.filter((item, idx) => idx <= 4);
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
        {!tabIdxChanged && arrc.map((item) => <ListBox labelStatus={item} />)}
        {tabIdxChanged && <ListBox labelStatus={labelText[5]} />}
      </OrderStatusViewLayout>
    </>
  );
};

export default OrderStatusView;
