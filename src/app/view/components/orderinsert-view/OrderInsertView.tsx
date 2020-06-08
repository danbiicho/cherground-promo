import React from "react";
import styled from "styled-components";
// import { RouteComponentProps } from "react-router-dom";
import MenuBox from "app/view/widgets/MenuBox";

const OrderInsertView = () => {
  //   const [menuText, setMenuText] = useState<string[]>([
  //     "아우터",
  //     "상의",
  //     "하의",
  //     "악세사리",
  //     "기타",
  //   ]);
  return (
    <OrderInsertViewLayout>
      <MenuBox />
    </OrderInsertViewLayout>
  );
};

export default OrderInsertView;

const OrderInsertViewLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;
