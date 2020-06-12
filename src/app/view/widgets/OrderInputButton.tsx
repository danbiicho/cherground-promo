import React, { useState } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

const OrderInputButton: React.FunctionComponent<RouteComponentProps> = (
  props
) => {
  const [ModalOpen, setModalOpen] = useState<boolean>(true);

  return (
    <OrderInputButtonLayout onClick={() => props.onClick()}>
      주문 입력 +
    </OrderInputButtonLayout>
  );
};

const OrderInputButtonLayout = styled.button`
  position: absolute;
  right: 0;
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 2px;
  background-color: #131313;
  color: #fff;
  font-family: NanumSquare;
  font-size: 14px;
  //right: 64px;
  margin-left: auto;
`;

export default OrderInputButton;
