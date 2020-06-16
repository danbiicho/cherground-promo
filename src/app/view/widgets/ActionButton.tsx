import React from "react";
import styled from "styled-components";

interface Buttonprops {
  buttonName: "PRIMARY" | "SECONDARY";
  isEnable: boolean;
  buttonText: string;
  onClick: () => void;
  styleExist?: React.ComponentState;
  brandExist?: React.ComponentState;
  isConfirmed?: number;
}

interface ButtonLayoutProps {
  buttonName: string;
  isEnable: boolean;
  isStyle?: string;
  isBrand?: string;
  isConfirmed: number;
}

const ActionButton: React.FunctionComponent<Buttonprops> = (props) => {
  const style = props.styleExist;
  const brand = props.brandExist;
  return (
    <ActionButtonLayout
      isEnable={props.isEnable}
      buttonName={props.buttonName}
      onClick={props.onClick}
      isStyle={style}
      isBrand={brand}
      isConfirmed={props.isConfirmed}
    >
      {props.buttonText}
    </ActionButtonLayout>
  );
};

const ActionButtonLayout = styled.button<ButtonLayoutProps>`
  width: 100px;
  height: 40px;
  border-style: none;
  ${(props) => {
    if (props.isStyle && props.isBrand) {
      return "background-color: #131313;color: #fff";
    }
    if (props.isConfirmed >= 1) {
      return "background-color: #131313;color: #fff";
    }
    if (props.buttonName === "PRIMARY") {
      if (props.isEnable) {
        return "background-color: #131313; color: #fff;";
      } else {
        return "background-color: #dfdfdf; color: #fff;";
      }
    } else {
      if (props.isEnable) {
        return "background-color: #fff; color: #535454;";
      } else {
        return "background-color: #fff; color: #535454;";
      }
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
`;

export default ActionButton;
