import React from "react";
import styled from "styled-components";

const PromotionHeader = () => {
  return <PromotionHeaderWrapper>Cher Ground Promotion</PromotionHeaderWrapper>;
};

const PromotionHeaderWrapper = styled.div`
  padding: 24px 14px;
  width: 100vw;
  height: 48px;
  background-color: #131313;
  font-family: NanumSquare;
  font-size: 14px;
  font-weight: 900;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default PromotionHeader;
