import React from "react";
import styled from "styled-components";
import Label from "app/view/widgets/Label";

const ListBox = () => {
  return (
    <ListBoxWrapper>
      <Icon />
      <Container>
        <ItemName>Item Name</ItemName>
        <BrandName>Brand Name</BrandName>
        <Contents>김셀업님의 주문이 정상적으로 입력되었습니다.</Contents>
      </Container>
      <Label status={"원부자재 선택"}></Label>
    </ListBoxWrapper>
  );
};

const ListBoxWrapper = styled.div`
  margin: 0 64px;
  height: 104px;
  border-radius: 2px;
  border: solid 1px #dfdfdf;
  display: flex;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #535454;
  border-radius: 50%;
  margin: 28px 0 28px 24px;
`;

const Container = styled.div`
  margin-left: 24px;
`;

const ItemName = styled.p`
  /* margin: 24px 0 12px 24px; */
  /* width: 106px; */
  height: 22px;
  font-family: NanumSquare;
  font-size: 20px;
  color: #535454;
`;

const BrandName = styled.p`
  margin-right: 12px;
  width: 68px;
  height: 13px;
  font-family: NanumSquare_acR;
  font-size: 12px;
  color: #68768d;
`;

const Contents = styled.p`
  /* width: 300px; */
  height: 22px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #535454;
`;

export default ListBox;
