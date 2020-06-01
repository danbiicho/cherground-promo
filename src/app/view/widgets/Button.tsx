import React from "react";
import styled from "styled-components";

interface Buttonprops {
  isAbled?: boolean;
  buttonName: string;
  buttonText: string;
}

const Button: React.FunctionComponent<Buttonprops> = (props) => {
  return (
    // 버튼 하나로 하는 방법
    <CTAButton isAbled={true} buttonName={props.buttonName}>
      <ButtonText buttonName={props.buttonName}>{props.buttonText}</ButtonText>
    </CTAButton>
  );
};

const CTAButton = styled.button<{ isAbled: boolean; buttonName: string }>`
  width: 420px;
  height: 48px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.isAbled
      ? props.buttonName === "primary"
        ? "#1e1e1e"
        : "#ffffff"
      : "#dfdfdf"};
  display: flex;
  text-align: center;
  justify-content: center;
  border: ${(props) =>
    props.buttonName === "primary" ? "0" : "1px solid #1f263e"};
  outline: 0;
  margin-bottom: 20px;
`;

const ButtonText = styled.p<{ buttonName: string }>`
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => (props.buttonName === "primary" ? "#ffffff" : "#1f263e")};
`;

export default Button;
