import React, { useState } from "react";
import styled from "styled-components";

const DropDownBox: React.FunctionComponent = (props) => {
  const [filteringText, setfilteringText] = useState<string[]>(["상태"]);
  const [filteredItems, setfilteredItems] = useState<string[]>([
    "모두1",
    "모두2",
    "모두3",
    "모두4",
    "모두5",
  ]);
  //const [filteringIdx, setfilteringIdx] = useState<number>(0);
  const [isSelectBoxOpend, setIsSelectBoxOpend] = useState<boolean>(false);

  const itemSelectHandler = () => {
    //setfilteringIdx((filteringIdx) => (filteringIdx += 1));
  };

  const arrowChangeHandler = () => {
    setIsSelectBoxOpend(!isSelectBoxOpend);
    //setfilteringIdx((filteringIdx) => (filteringIdx += 1));
  };

  const selectItems = (item: string, idx: number) => {
    alert(`${item} ${idx + 1} is selected!`);
  };

  const closeBox = () => {
    //setIsSelectBoxOpend(!isSelectBoxOpend);
    alert("clickeddd");
  };

  return (
    <DropDownBoxWrapper isChanged={isSelectBoxOpend}>
      <DropDownBoxCont onClick={itemSelectHandler}>
        {!isSelectBoxOpend && (
          <DropDownSelectors isChanged={isSelectBoxOpend}>
            {filteringText[0]}:<FilteredItems>{filteredItems[0]}</FilteredItems>
          </DropDownSelectors>
        )}
        {isSelectBoxOpend &&
          filteredItems.map((item, idx, arr) => {
            return (
              <DropDownSelectors
                isChanged={isSelectBoxOpend}
                onClick={() => {
                  selectItems(item, idx);
                }}
                onBlur={closeBox}
              >
                {filteringText[0]}:<FilteredItems>{item}</FilteredItems>
              </DropDownSelectors>
            );
          })}
      </DropDownBoxCont>
      <ArrowCont onClick={arrowChangeHandler} isChanged={isSelectBoxOpend}>
        <Arrow isChanged={isSelectBoxOpend}></Arrow>
      </ArrowCont>
    </DropDownBoxWrapper>
  );
};

const DropDownBoxWrapper = styled.div<{ isChanged: boolean }>`
  width: 120px;
  height: ${(props) => (props.isChanged ? "fit-content" : "40px")};
  padding: 12px;
  border-radius: 2px;
  border: 1px solid #dfdfdf;
  display: flex;
  justify-content: flex-start;
  margin-right: 8px;
`;

const DropDownBoxCont = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const DropDownSelectors = styled.div<{ isChanged: boolean }>`
  margin-top: ${(props) => (props.isChanged ? "2px" : "")};
  font-family: NanumSquare;
  font-size: 14px;
  color: #535454;
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
