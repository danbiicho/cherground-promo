import React from "react";
import styled from "styled-components";

const OrderInputButton = () => {
  return <OrderInputButtonLayout>주문 입력 +</OrderInputButtonLayout>;
};

const OrderInputButtonLayout = styled.button`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 2px;
  background-color: #131313;
  color: #fff;
  font-family: NanumSquare;
  font-size: 14px;
  position: absolute;
  right: 64px;
`;

export default OrderInputButton;
