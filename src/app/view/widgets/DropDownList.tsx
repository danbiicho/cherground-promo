import React from "react";
import styled from "styled-components";

const DropDownList: React.FunctionComponent = (props) => {
  return (
    <DropDownListLayout>
      <ListIcon />
      <ListContainer>
        <ListTitle>Title</ListTitle>
        <ListCaption>Caption</ListCaption>
      </ListContainer>
    </DropDownListLayout>
  );
};

const DropDownListLayout = styled.li`
  list-style: none;
  height: 71px;
  //background-color: #f4f6f8;
  padding: 20px 0 19px 24px;
  display: flex;
  align-items: center;
`;

const ListIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #535454;
  border-radius: 50%;
`;

const ListContainer = styled.div`
  height: 71px;
  margin-left: 16px;
`;

const ListTitle = styled.p`
  width: 292px;
  height: 18px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #1c2542;
  margin: 16px 0 8px 0;
`;

const ListCaption = styled.p`
  width: 292px;
  height: 16px;
  font-family: NanumSquare;
  font-size: 14px;
  color: #7b7f8d;
  margin: 0;
`;

export default DropDownList;
