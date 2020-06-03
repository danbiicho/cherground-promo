import React from "react";
import styled from "styled-components";
import DropDownBox from "app/view/widgets/DropDownBox";
import SearchBox from "app/view/widgets/SearchBox";
import PromotionHeader from "app/view/widgets/PromotionHeader";

const OrderStatusView = (props) => {
  return (
    <>
      <PromotionHeader />
      <OrderStatusViewWrapper>
        <TitleCont>제작 주문</TitleCont>
        <StatusCont>
          <DropDownBox />
          <SearchBox />
        </StatusCont>
      </OrderStatusViewWrapper>
    </>
  );
};

const OrderStatusViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 64px;
`;

const TitleCont = styled.div`
  width: 100vw;
  padding: 48px 0;
  font-family: NanumSquare;
  font-size: 28px;
  font-weight: 700;
  color: #1e2640;
`;

const StatusCont = styled.div`
  display: flex;
`;

export default OrderStatusView;
