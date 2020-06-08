import React from "react";
import styled from "styled-components";

interface Buttonprops {
  isEnable: boolean;
  buttonName: "PRIMARY" | "SECONDARY";
  buttonText: string;
  onClick: () => void;
}

interface ButtonLayoutProps {
  isEnable: boolean;
  buttonName: string;
}

const ActionButton: React.FunctionComponent<Buttonprops> = (props) => {
  return (
    <ActionButtonLayout
      isEnable
      buttonName={props.buttonName}
      onClick={props.onClick}
    >
      Text
    </ActionButtonLayout>
  );
};

const ActionButtonLayout = styled.button<ButtonLayoutProps>`
  width: 100px;
  height: 40px;
  border-style: none;
  background-color: ${(props) =>
    props.buttonName === "PRIMARY"
      ? props.isEnable
        ? "#131313"
        : "#dfdfdf"
      : ""};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.buttonName === "SECONDARY" ? "1px solid #dfdfdf" : ""};
  outline: 0;
  margin-bottom: 20px;
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    props.buttonName === "SECONDARY"
      ? props.isEnable
        ? "#535454"
        : "#dfdfdf"
      : "#ffffff"};
`;

export default ActionButton;
