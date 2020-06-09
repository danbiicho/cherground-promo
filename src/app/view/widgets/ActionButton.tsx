import React from "react";
import styled from "styled-components";

interface Buttonprops {
  buttonName: "PRIMARY" | "SECONDARY";
  isEnable: boolean;
  buttonText: string;
  onClick: () => void;
  styleExist?: React.ComponentState;
  brandExist?: React.ComponentState;
}

interface ButtonLayoutProps {
  buttonName: string;
  isEnable: boolean;
  isStyle?: string;
  isBrand?: string;
}

const ActionButton: React.FunctionComponent<Buttonprops> = (props) => {
  const style = props.styleExist;
  const brand = props.brandExist;
  return (
    <ActionButtonLayout
      isEnable
      buttonName={props.buttonName}
      onClick={props.onClick}
      isStyle={style}
      isBrand={brand}
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
      }
      if (props.isEnable === true) {
        return "#dfdfdf";
      }
    }
    if (props.buttonName === "SECONDARY") {
      return "#ffffff";
    }
  }};
  ${(props) => {
    if (props.isStyle && props.isBrand) {
      return "background-color: #131313";
    }
  }}
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.buttonName === "SECONDARY" ? "1px solid #dfdfdf" : ""};
  outline: 0;
  margin: 0 8px 20px;
  font-family: NanumSquare;
  font-size: 14px;
  color: ${(props) => {
    if (props.buttonName === "SECONDARY") {
      if (props.isEnable === false) {
        return "#535454";
      }
      if (props.isEnable === true) {
        return "#dfdfdf";
      }
    }
    if (props.buttonName === "PRIMARY") {
      return "#ffffff";
    }
  }};
`;

export default ActionButton;
