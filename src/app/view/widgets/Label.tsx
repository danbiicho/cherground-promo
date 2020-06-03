import React from "react";
import styled from "styled-components";

interface LabelProps {
  status: "대기" | "원부자재 선택" | "샘플 제작" | "배송" | "제작";
}

const Label: React.FunctionComponent<LabelProps> = (props) => {
  return <LabelLayout status={props.status}>{props.status}</LabelLayout>;
};

const LabelLayout = styled.div<LabelProps>`
  width: 100px;
  height: 22px;
  border-radius: 11px;
  font-family: NanumSquare;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.status === "대기") {
      return "#b9bbc1";
    }
    if (props.status === "원부자재 선택") {
      return "#fecc4e";
    }
    if (props.status === "샘플 제작") {
      return "#7b61fc";
    }
    if (props.status === "배송") {
      return "#ff8147";
    }
    if (props.status === "제작") {
      return "#566be5";
    }
  }};
`;

export default Label;
