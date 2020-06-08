import React from "react";
import styled from "styled-components";
import arrowIcon from "cg-promotion-collapsible-expand.png";
import DropDownList from "app/view/widgets/DropDownList";
import ActionButton from "./ActionButton";

// interface MenuBoxProps {
//   menuText: string;
//   selectItems: (item: string, idx: number) => void;
// }

const MenuBox: React.FunctionComponent = (props) => {
  return (
    <>
      <MenuBoxWrapper>
        <MenuBoxText>Text</MenuBoxText>
        <ArrowIcon src={arrowIcon} />
      </MenuBoxWrapper>
      <DropDownWrapper>
        <DropDownList />
        <DropDownList />
      </DropDownWrapper>
      <ActionButton />
    </>
  );
};

const MenuBoxWrapper = styled.div`
  width: 620px;
  height: 48px;
  border-radius: 2px;
  border: solid 1px #dfdfdf;
  position: relative;
`;

const MenuBoxText = styled.p`
  width: 525.8px;
  height: 18px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #131313;
  margin: 0;
  padding: 15px 78px 15px 16px;
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 14px;
  right: 16px;
`;

const DropDownWrapper = styled.div`
  width: 620px;
  height: 158px;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 8px 0;
`;

export default MenuBox;
