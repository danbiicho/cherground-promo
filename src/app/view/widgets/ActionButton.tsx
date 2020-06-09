import React from "react";
import styled from "styled-components";

interface Buttonprops {
  buttonName: "PRIMARY" | "SECONDARY";
  isEnable: boolean;
  buttonText: string;
  // onClick: () => void;
}

interface ButtonLayoutProps {
  buttonName: string;
  isEnable: boolean;
}

const ActionButton: React.FunctionComponent<Buttonprops> = (props) => {
  return (
    <ActionButtonLayout
      isEnable
      buttonName={props.buttonName}
      // onClick={props.onClick}
    >
      {props.buttonText}
    </ActionButtonLayout>
  );
};

const ActionButtonLayout = styled.button<ButtonLayoutProps>`
  width: 100px;
  height: 40px;
  border-style: none;
  background-color: ${(props) => {
    if (props.buttonName === "PRIMARY") {
      if (props.isEnable === false) {
        return "#131313";
      } else if (props.isEnable === false) {
        return "#dfdfdf";
      }
    }
    if (props.buttonName === "SECONDARY") {
      return "#ffffff";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.buttonName === "SECONDARY" ? "1px solid #dfdfdf" : ""};
  outline: 0;
  margin: 0 8px 20px;
  font-family: NanumSquare;
  font-size: 14px;
  color: ${(props) =>
    props.buttonName === "SECONDARY"
      ? props.isEnable
        ? "#535454"
        : "#dfdfdf"
      : "#ffffff"};
`;

export default ActionButton;
