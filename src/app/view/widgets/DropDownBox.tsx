import React, { useState } from "react";
import styled from "styled-components";
import { IndexAttachmentList } from "aws-sdk/clients/clouddirectory";

interface DropDownBoxProps {
  filteringText: any;
  filteredItems: any;
  selectedIdx: number;
  selectItems: (item: string, idx: number) => void;
  isSelectBoxOpend: boolean;
  arrowChangeHandler: () => void;
}

const DropDownBox: React.FunctionComponent<DropDownBoxProps> = (props) => {
  // prop box에 나오는 값들을 부모에서부터 정의하기. 그럼 재사용성이 높아진다.

  const closeBox = () => {
    alert("closing box");
  };

  const { isSelectBoxOpend, arrowChangeHandler } = props;

  return (
    <TotalCont isChanged={isSelectBoxOpend}>
      <DropDownBoxWrapper onClick={arrowChangeHandler}>
        <DropDownBoxCont isChanged={isSelectBoxOpend}>
          <DropDownSelectors>
            {props.filteringText[0]}:
            <FilteredItems>
              {props.filteredItems[props.selectedIdx]}
            </FilteredItems>
          </DropDownSelectors>
        </DropDownBoxCont>
        <ArrowCont onClick={arrowChangeHandler} isChanged={isSelectBoxOpend}>
          <Arrow isChanged={isSelectBoxOpend}></Arrow>
        </ArrowCont>
      </DropDownBoxWrapper>
      <DropDownBoxDfWrapper isChanged={isSelectBoxOpend} onBlur={closeBox}>
        <DropDownBoxCont isChanged={isSelectBoxOpend}>
          {isSelectBoxOpend &&
            props.filteredItems.map((item: string, idx: number) => {
              return (
                <DropDownDefaultBox
                  key={idx}
                  isChanged={isSelectBoxOpend}
                  onClick={() => {
                    props.selectItems(item, idx);
                  }}
                >
                  {props.filteringText[0]}:<FilteredItems>{item}</FilteredItems>
                </DropDownDefaultBox>
              );
            })}
        </DropDownBoxCont>
      </DropDownBoxDfWrapper>
    </TotalCont>
  );
};

const TotalCont = styled.div<{ isChanged: boolean }>`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 100px;
  z-index: 555;
  background: #fff;
`;

const DropDownBoxWrapper = styled.div<{ onClick: () => void }>`
  width: 120px;
  padding: 12px;
  border-radius: 2px;
  border: 1px solid #dfdfdf;
  display: flex;
  justify-content: flex-start;
  //flex-direction: column;
  margin-right: 8px;
`;

const DropDownBoxDfWrapper = styled.div<{ isChanged: boolean }>`
  position: sticky;
  top: 100px;
  padding: 12px;
  border-radius: 2px;
  border: 1px solid #dfdfdf;
  margin-right: 8px;
  visibility: ${(props) => (props.isChanged ? "visible" : "hidden")};
  z-index: 333;
`;

const DropDownBoxCont = styled.div<{ isChanged: boolean }>`
  //padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const DropDownDefaultBox = styled.div<{ isChanged: boolean }>`
  width: max-content;
  font-family: NanumSquare;
  display: block;
  font-size: 14px;
  color: #535454;
`;

const DropDownSelectors = styled.div`
  font-family: NanumSquare;
  font-size: 14px;
  color: #535454;
  width: max-content;
`;

const ArrowCont = styled.span<{ isChanged: boolean }>`
  margin-left: auto;
  width: 10px;
  height: 10px;
  display: flex;
  padding-top: ${(props) => (props.isChanged ? "5px" : "")};
`;

const Arrow = styled.i<{ isChanged: boolean }>`
  width: 6px;
  height: 6px;
  border: solid #b9bbc1;
  border-width: 0 1px 1px 0;
  display: inline-block;
  transform: rotate(45deg);
  transform: ${(props) => (props.isChanged ? "rotate(225deg)" : "")};
`;
const FilteredItems = styled.span`
  margin-left: 3px;
  color: #535454;
`;

export default DropDownBox;
