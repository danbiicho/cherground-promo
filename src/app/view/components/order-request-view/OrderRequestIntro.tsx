import React from "react";
import styled from "styled-components";
import InputSelections from "app/view/widgets/InputSelections";

const OrderRequestIntro = () => {
  return (
    <>
      <Overlay>
        <OrderRequestModalLayout>
          <TitleBox>
            <span style={{ whiteSpace: "nowrap" }}>주문 의뢰서 접수</span>
            <ProgressBox>
              <ProgressBar />
            </ProgressBox>
          </TitleBox>
          <IntroSection>
            <IntroBox></IntroBox>
            <IntroInputCont></IntroInputCont>
          </IntroSection>
          <Divider />
          <BtnCont>
            <Cancel>취소</Cancel>
            <Apply>접수</Apply>
          </BtnCont>
        </OrderRequestModalLayout>
      </Overlay>
    </>
  );
};

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderRequestModalLayout = styled.div`
  margin: 64px 0;
  width: 700px;
  height: 825px;
  border-radius: 2px;
  background-color: #fff;
  z-index: 555;
  padding: 0 40px;
`;

const TitleBox = styled.div`
  font-family: NanumSquare;
  height: 99px;
  font-weight: 700;
  font-size: 28px;
  color: #1e2640;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
`;

const ProgressBox = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 28px;
  z-index: 10;
  background-color: #dfdfdf;
  position: relative;
`;

const ProgressBar = styled.span`
  position: absolute;
  width: 50%;
  height: 2px;
  z-index: 22;
  background-color: #50b12f;
`;
const IntroSection = styled.div`
  width: 100%;
  height: 68px;
  border-radius: 2px;
  background-color: #f4f6f8;
`;

const IntroBox = styled.div``;
const IntroInputCont = styled.div``;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  margin: 30px 0;
`;

const BtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Cancel = styled.button`
  margin-right: 8px;
`;
const Apply = styled.button``;

export default OrderRequestIntro;
