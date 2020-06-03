import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "search.png";

const SearchBox: React.FunctionComponent = (props) => {
  const searchClickedHandler = () => {
    alert("검색 끝");
  };
  return (
    <SearchBoxWrapper>
      <SearchAreaCont>
        <InputArea>
          <InputText type="text" />
        </InputArea>
        <SearchIconBox onClick={searchClickedHandler}>
          <SearchIconImg src={searchIcon} />
        </SearchIconBox>
      </SearchAreaCont>
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  width: 224px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #dfdfdf;
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
`;

const SearchAreaCont = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const InputArea = styled.form`
  display: flex;
  align-items: center;
`;
const InputText = styled.input`
  padding: 6px 12px;
  border: none;
`;

const SearchIconBox = styled.span`
  width: 28px;
  height: 28px;
  padding: 6px;
`;
const SearchIconImg = styled.img``;
export default SearchBox;
