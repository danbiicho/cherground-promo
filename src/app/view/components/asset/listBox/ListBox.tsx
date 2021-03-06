import React from "react";
import styled from "styled-components";
import Label from "app/view/widgets/Label";
import { RouteComponentProps } from "react-router-dom";
import { UserViewModel } from "app/view-model";
import container from "injector";

const ListBox: React.FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <ListBoxWrapper>
      <Icon />
      <Container>
        <NameContents>
          <ItemName>{props.styleName}</ItemName>
          <BrandName>{props.brandName}</BrandName>
        </NameContents>
        <Contents>{`${props.brandName}님의 주문이 정상적으로 입력되었습니다.`}</Contents>
      </Container>
      <SystemContents>
        <Label labelStatus={props.labelStatus} />
        <SystemInfo>
          <NameInfo>System</NameInfo>
          <Divider></Divider>
          <DateInfo>2020.05.10 at 13:31</DateInfo>
        </SystemInfo>
      </SystemContents>
    </ListBoxWrapper>
  );
};

const ListBoxWrapper = styled.div`
  height: 104px;
  border-radius: 2px;
  border: solid 1px #dfdfdf;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 8px;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #535454;
  border-radius: 50%;
  margin: 28px 0 28px 24px;
`;

const Container = styled.div`
  margin: 0 24px;
`;

const NameContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ItemName = styled.p`
  margin: 0;
  height: 22px;
  font-family: NanumSquare;
  font-size: 20px;
  color: #535454;
`;

const BrandName = styled.p`
  margin: 0;
  margin-left: 12px;
  height: 13px;
  font-family: NanumSquare;
  font-size: 12px;
  color: #68768d;
`;

const Contents = styled.p`
  margin: 0;
  height: 22px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #535454;
`;

const SystemContents = styled.div`
  position: absolute;
  right: 24px;
  display: block;
  justify-content: right;
`;

const SystemInfo = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
`;

const NameInfo = styled.p`
  margin: 0;
  width: 58px;
  height: 18px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #68768d;
`;

const Divider = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: #64768f;
`;

const DateInfo = styled.p`
  width: 161px;
  height: 18px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #68768d;
`;

export default ListBox;
