import React, { useState, useCallback } from "react";
import styled from "styled-components";
import arrowIcon from "cg-promotion-collapsible-expand.png";

interface MenuBoxProps {
  menuText?: string;
  filteredItems: React.ComponentState;
  selected?: string;
  //isValid?: string;
  onClickHandler: (idx: number, title: string) => void;
  isSelectBoxOpened: boolean;
  selectTitleTextHandler: () => void;
  isErrorMsg: boolean;
  selectedTitle: string;
}

const MenuBox: React.FunctionComponent<MenuBoxProps> = (props) => {
  // const [isSelectBoxOpend, setIsSelectBoxOpend] = useState<boolean>(false);
  // const [selectedTitle, setSelectedTitle] = useState<string>(
  //   "제작 카테고리 선택"
  // );
  // const [errorMsg, setErrorMsg] = useState<boolean>(false);

  // const arrowChangeHandler = () => {
  //   setIsSelectBoxOpend(!isSelectBoxOpend);
  //   if (isSelectBoxOpend === true) {
  //     if (selectedTitle === "제작 카테고리 선택") {
  //       setErrorMsg(true);
  //     }
  //   }
  // };

  const { filteredItems } = props;

  // const onClickHandler = useCallback(
  //   (idx, title) => {
  //     setSelectedTitle(title);
  //     setErrorMsg(false);
  //     setIsSelectBoxOpend(false);
  //   },
  //   [selectedTitle]
  // );

  return (
    <>
      <BoxLabel
        isValid={props.isErrorMsg}
        style={{ marginBottom: "12px", display: "inline-block" }}
      >
        카테고리*
      </BoxLabel>
      <ErrorMsg isValid={props.isErrorMsg}>필수 품목입니다</ErrorMsg>
      <MenuBoxWrapper isValid={props.isErrorMsg}>
        <MenuBoxText>
          <Placeholder selected={props.selectedTitle}>
            {props.selectedTitle}
          </Placeholder>
        </MenuBoxText>
        <ArrowIcon
          src={arrowIcon}
          onClick={props.selectTitleTextHandler}
          isOpened={props.isSelectBoxOpened}
        />
      </MenuBoxWrapper>
      <DropDownWrapper isOpened={props.isSelectBoxOpened}>
        {filteredItems.map((value: any, idx: number, arr: any) => {
          return (
            <>
              <DropDownListLayout
                key={idx}
                onClick={() => props.onClickHandler(idx, arr[idx].title)}
              >
                <ListIcon />
                <ListContainer>
                  <ListTitle>{value.title}</ListTitle>
                  <ListCaption>{value.desc}</ListCaption>
                </ListContainer>
              </DropDownListLayout>
            </>
          );
        })}
      </DropDownWrapper>
    </>
  );
};

const BoxLabel = styled.div<{ isValid: boolean }>`
  color: ${(props) => (props.isValid ? "#d50000" : "#1e2640")};
`;

const ErrorMsg = styled.div<{ isValid: boolean }>`
  margin-left: auto;
  font-size: 12px;
  color: #d50000;
  margin-bottom: 13px;
  display: inline-block;
  position: absolute;
  right: 0;
  visibility: ${(props) => (props.isValid ? "visible" : "hidden")};
`;

const MenuBoxWrapper = styled.div<{ isValid: boolean }>`
  width: 620px;
  height: 48px;
  border-radius: 2px;
  border: ${(props) =>
    props.isValid ? "solid 1px #d50000" : "solid 1px #dfdfdf"};
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

const Placeholder = styled.span<{ selected: string }>`
  font-size: 16px;
  color: ${(props) => {
    if (props.selected === "제작 카테고리 선택") {
      return "#b9bbc1";
    } else return "#131313";
  }};
`;

const ArrowIcon = styled.img<{ isOpened: boolean }>`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 14px;
  right: 16px;
  transform: ${(props) => (props.isOpened ? "rotate(180deg)" : "")};
`;

const DropDownWrapper = styled.div<{ isOpened: boolean }>`
  width: 620px;
  height: 371px;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 8px 0;
  display: ${(props) => (props.isOpened ? "block" : "none")};
  background-color: #fff;
`;

const DropDownListLayout = styled.li`
  list-style: none;
  height: 71px;
  padding: 16px 0 16px 24px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f4f6f8;
  }
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

export default MenuBox;
