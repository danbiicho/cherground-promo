import React, { useContext } from "react";
import styled from "styled-components";

interface Buttonprops {
  isEnable: boolean;
  buttonName: "PRIMARY" | "SECONDARY";
  buttonText: string;
  onClick: () => void;
}

const Button: React.FunctionComponent<Buttonprops> = (props) => {
  return (
    <CTAButton
      isEnable={true}
      buttonName={props.buttonName}
      onClick={props.onClick}
    >
      {props.buttonText}
    </CTAButton>
  );
};

const CTAButton = styled.button<{ isEnable: boolean; buttonName: string }>`
  width: 420px;
  height: 48px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.isEnable
      ? props.buttonName === "PRIMARY"
        ? "#1e1e1e"
        : "#ffffff"
      : "#dfdfdf"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.isEnable
      ? props.buttonName === "PRIMARY"
        ? "0"
        : "1px solid #1f263e"
      : "0"};
  outline: 0;
  margin-bottom: 20px;
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) =>
    props.isEnable
      ? props.buttonName === "PRIMARY"
        ? "#ffffff"
        : "#1f263e"
      : "#ffffff"};
`;

export default Button;
