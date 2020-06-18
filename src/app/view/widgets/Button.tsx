import React from "react";
import styled from "styled-components";

interface Buttonprops {
  isEnable: boolean;
  buttonName: "PRIMARY" | "SECONDARY";
  buttonText: string;
  onClick: () => void;
  stageIdx?: number;
}

interface ButtonLayoutProps {
  isEnable: boolean;
  buttonName: string;
  stageIdx?: number;
}

const Button: React.FunctionComponent<Buttonprops> = (props) => {
  return (
    <ButtonLayout
      isEnable
      buttonName={props.buttonName}
      stageIdx={props.stageIdx}
      onClick={props.onClick}
    >
      {props.buttonText}
    </ButtonLayout>
  );
};

const ButtonLayout = styled.button<ButtonLayoutProps>`
  visibility: ${(props) => (props.stageIdx >= 3 ? "hidden" : "visible")};
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
  color: ${(props) =>
    props.isEnable
      ? props.buttonName === "PRIMARY"
        ? "#ffffff"
        : "#1f263e"
      : "#ffffff"};
`;

export default Button;
