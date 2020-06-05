import React from "react";
import styled from "styled-components";

interface Labelprops {
  labelStatus: string;
}

const Label: React.FunctionComponent<Labelprops> = (props) => {
  return (
    <LabelLayout labelStatus={props.labelStatus}>
      {props.labelStatus}
    </LabelLayout>
  );
};

const LabelLayout = styled.div<Labelprops>`
  width: 100px;
  height: 22px;
  border-radius: 11px;
  font-family: NanumSquare;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 16px 128px;
  background-color: ${(props) => {
    if (props.labelStatus === "대기") {
      return "#b9bbc1";
    }
    if (props.labelStatus === "원부자재 선택") {
      return "#fecc4e";
    }
    if (props.labelStatus === "샘플 제작") {
      return "#7b61fc";
    }
    if (props.labelStatus === "배송") {
      return "#ff8147";
    }
    if (props.labelStatus === "제작") {
      return "#566be5";
    }
    if (props.labelStatus === "완료") {
      return "#535454";
    }
  }};
`;

export default Label;
