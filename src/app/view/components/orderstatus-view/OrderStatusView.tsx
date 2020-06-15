import React, { useReducer, useState, useCallback } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import DropDownBox from "app/view/widgets/DropDownBox";
import SearchBox from "app/view/widgets/SearchBox";
import PromotionHeader from "app/view/widgets/PromotionHeader";
import OrderStatusViewLayout from "app/view/components/orderstatus-view/OrderStatusViewLayout";
import TitleContLayout from "app/view/components/orderstatus-view/TitleContLayout";
import SelectionBox from "app/view/components/orderstatus-view/SelectionBox";
import StatusContLayout from "app/view/components/orderstatus-view/StatusContLayout";
import ListBox from "app/view/components/asset/listBox/ListBox";
import ListViewWrapper from "app/view/components/orderstatus-view/ListViewWrapper";
import OrderRequestIntro from "app/view/components/order-request-view/OrderRequestIntro";
import Tab from "app/view/widgets/Tab";
import TabContainerLayout from "app/view/components/orderstatus-view/TabContainerLayout";
import OrderInputButton from "app/view/widgets/OrderInputButton";
import InputSelections from "app/view/widgets/InputSelections";
import ActionButton from "app/view/widgets/ActionButton";
import reducer from "app/view/reducers/orderReducers";

const OrderStatusView: React.FunctionComponent<RouteComponentProps> = (
  props
) => {
  const [tabIdxChanged, setTabIdxChanged] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [filteringText, setfilteringText] = useState<string[]>(["상태"]);
  const [filteredItems, setfilteredItems] = useState<string[]>([
    "모두1",
    "모두2",
    "모두3",
    "모두4",
    "모두5",
  ]);
  const [activeTab, setactiveTab] = useState(true);
  const labelText: string[] = [
    "대기",
    "원부자재 선택",
    "샘플 제작",
    "배송",
    "제작",
    "완료",
  ];
  const orderState = {
    brand: "",
    style: "",
  };

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [state, dispatch] = useReducer(reducer, orderState);
  const [isSelectBoxOpend, setIsSelectBoxOpend] = useState<boolean>(false);

  const arrowChangeHandler = () => {
    setIsSelectBoxOpend(!isSelectBoxOpend);
  };
  // 이 경우 배열 대신 객체 형태로 받는 것이 좋다.
  // 실제 데이터 호출을 할 때는 완료인 것과 완료 아닌 것 구분 해서 온다.
  // 완료 아닌 것 map을 돌리면서 label의 text만 들어가서 렌더링 되도록.

  const selectItems = (item: string, idx: number) => {
    console.log(idx);
    setSelectedIdx(idx);
    setIsSelectBoxOpend(false);
  };

  const tabChangeHandler = (status: string) => {
    setTabIdxChanged(!tabIdxChanged);
    setactiveTab(!activeTab);
  };

  const modalOpenHandler = () => {
    setModalOpen(true);
  };
  const closeBox = () => {
    setIsSelectBoxOpend(false);
  };

  const arr = labelText.filter((item, idx) => idx <= 4);

  return (
    <>
      {
        <OrderRequestIntro
          isModalOpen={isModalOpen}
          close={() => setModalOpen(false)}
        />
      }
      <PromotionHeader />
      <OrderStatusViewLayout>
        <TitleContLayout>제작 주문</TitleContLayout>
        <TabContainerLayout>
          <Tab
            status={"진행중"}
            active={activeTab}
            onClickHandler={tabChangeHandler}
          />
          <Tab
            status={"완료"}
            active={!activeTab}
            onClickHandler={tabChangeHandler}
          />
        </TabContainerLayout>
        <StatusContLayout>
          <SelectionBox>
            <DropDownBox
              closeBox={closeBox}
              selectedIdx={selectedIdx}
              selectItems={selectItems}
              filteringText={filteringText}
              filteredItems={filteredItems}
              isSelectBoxOpend={isSelectBoxOpend}
              arrowChangeHandler={arrowChangeHandler}
            />
            <OverlayBox onClick={closeBox} />
            <OrderInputButton onClick={modalOpenHandler} />
          </SelectionBox>
          <ListViewWrapper>
            {!tabIdxChanged &&
              arr.map((item, idx) => <ListBox labelStatus={item} key={idx} />)}
            {tabIdxChanged && <ListBox labelStatus={labelText[5]} />}
          </ListViewWrapper>
        </StatusContLayout>
      </OrderStatusViewLayout>
      {/* </Overlay> */}
    </>
  );
};

export default OrderStatusView;

const Overlay = styled.div<{ isModalOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.isModalOpen ? "visible" : "hidden")};
  z-index: 100;
`;

const OrderRequestModalLayout = styled.div`
  width: 700px;
  height: 565px;
  border-radius: 2px;
  background-color: #fff;
  z-index: 555;
`;

const TopLayout = styled.div`
  padding: 0 40px;
`;

const TitleBox = styled.div`
  font-family: NanumSquare;
  font-weight: 700;
  font-size: 28px;
  color: #1e2640;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 40px;
`;

const ProgressBox = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 28px;
  z-index: 10;
  background-color: #dfdfdf;
  position: relative;
`;

const ProgressBar = styled.span<{ stage: number }>`
  position: absolute;
  width: ${(props) => (props.stage === 1 ? "50%" : "100%")};
  height: 2px;
  z-index: 22;
  background-color: #50b12f;
`;
const IntroSection = styled.div`
  width: 100%;
  height: 68px;
  border-radius: 2px;
  background-color: #f4f6f8;
  display: flex;
  align-items: center;
  margin: 16px 0 28px 0;
`;

const IntroIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #68768d;
  border-radius: 50%;
  margin-left: 16px;
`;

const IntroBox = styled.div`
  margin-left: 16px;
  align-items: center;
`;

const IntroInputCont = styled.p`
  height: 16px;
  font-family: NanumSquare;
  font-size: 14px;
  color: #1e2640;
  margin: 0 0 4px 0;
`;

const IntroInputSub = styled.p`
  height: 16px;
  font-family: NanumSquare;
  font-size: 14px;
  color: #1e2640;
  margin: 0;
`;

const BrandInputBox = styled.div``;

const StyleInputBox = styled.div``;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  margin: 50px 0 20px 0;
`;

const BtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 32px 0 0;
`;

const OverlayBox = styled.div`
  width: 300px;
`;
