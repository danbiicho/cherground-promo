import React, { useState } from "react";
import styled from "styled-components";
import arrowIcon from "cg-promotion-collapsible-expand.png";

interface MenuBoxProps {
  menuText: string;
  filteredItems: React.ComponentState;
  selectItems: (item: string, idx: number) => void;
}

const MenuBox: React.FunctionComponent<MenuBoxProps> = (props) => {
  const [isSelectBoxOpend, setIsSelectBoxOpend] = useState<boolean>(false);
  const [selectedTitle, setSelectedTitle] = useState<string>(
    "제작 카테고리 선택"
  );
  console.log(props.filteredItems);
  const arrowChangeHandler = () => {
    setIsSelectBoxOpend(!isSelectBoxOpend);
  };

  // const closeBox = () => {
  //   setIsSelectBoxOpend(!isSelectBoxOpend);
  // };

  const { filteredItems } = props;
  const onClickHandler = (idx, title) => {
    setSelectedTitle(title);
  };

  return (
    <>
      <MenuBoxWrapper>
        <MenuBoxText>
          <Placeholder>{selectedTitle}</Placeholder>
        </MenuBoxText>
        <ArrowIcon
          src={arrowIcon}
          onClick={props.arrowChangeHandler}
          isOpened={props.isSelectBoxOpened}
        />
      </MenuBoxWrapper>
      <DropDownWrapper isOpened={props.isSelectBoxOpened}>
        {filteredItems.map((value, idx, arr) => {
          console.log(value);
          return (
            <>
              <DropDownListLayout
                onClick={() => onClickHandler(idx, arr[idx].title)}
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

const Placeholder = styled.span`
  font-size: 16px;
  color: #b9bbc1;
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
  //background-color: #f4f6f8;
  padding: 16px 0 16px 24px;
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

export default MenuBox;
