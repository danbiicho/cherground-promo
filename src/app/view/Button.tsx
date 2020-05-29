import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const isActive = props.isActive;

  return (
    <>
      <PrimaryCTA disabled={false}>
        <PrimaryCTAText isActive={isActive}>CTA</PrimaryCTAText>
      </PrimaryCTA>
      <SecondaryCTA disabled={true}>
        <SecondaryCTAText isActive={isActive}>CTA</SecondaryCTAText>
      </SecondaryCTA>
    </>
  );
};

export default Button;

const PrimaryCTA = styled.button`
  width: 420px;
  height: 48px;
  border-radius: 2px;
  background-color: ${(props) => (props.disabled ? "#dfdfdf" : "#1e1e1e")};
  display: flex;
  justify-content: center;
  border: 0;
  outline: 0;
  margin-bottom: 20px;
`;

const PrimaryCTAText = styled.p`
  width: 31px;
  height: 18px;
  font-family: NanumSquare_acEB;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => (props.disabled ? "#1e1e1e" : "#dfdfdf")};
`;

const SecondaryCTA = styled.button`
  width: 420px;
  height: 48px;
  border-radius: 2px;
  border: solid 1px #1f263e;
  background-color: ${(props) => (props.disabled ? "#dfdfdf" : "#ffffff")};
  display: flex;
  justify-content: center;
`;

const SecondaryCTAText = styled.p`
  width: 31px;
  height: 18px;
  font-family: NanumSquare_acEB;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => (props.disabled ? "##ffffff" : "#1f263e")};
`;
