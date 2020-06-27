import React from "react";
import styled from "styled-components";

interface Labelprops {
  labelStatus: string;
}

const labelTextConvert: any = {
  PENDING: "대기중",
  MATERIAL_SELECT: "원부자재 선택",
  SAMPLE_MAKING: "샘플 제작",
  DELIVERY: "배송",
  PRODUCT_MAKING: "제작",
  COMPLETE: "완료",
};

const Label: React.FunctionComponent<Labelprops> = (props) => {
  return (
    <LabelLayout labelStatus={props.labelStatus}>
      {labelTextConvert[`${props.labelStatus}`]}
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
    if (props.labelStatus === "PENDING") {
      return "#b9bbc1";
    }
    if (props.labelStatus === "MATERIAL_SELECT") {
      return "#fecc4e";
    }
    if (props.labelStatus === "SAMPLE_MAKING") {
      return "#7b61fc";
    }
    if (props.labelStatus === "DELIVERY") {
      return "#ff8147";
    }
    if (props.labelStatus === "PRODUCT_MAKING") {
      return "#566be5";
    }
    if (props.labelStatus === "COMPLETE") {
      return "#535454";
    }
  }};
`;

export default Label;
