import React from "react";
import styled from "styled-components";

const InputBox: React.FunctionComponent = (props) => {
  return (
    <FormTagInput>
      <InputCont type="text" placeholder={"placeholder"} isValid={true} />
    </FormTagInput>
  );
};

const FormTagInput = styled.form`
  margin-bottom: 16px;
`;

const InputCont = styled.input<{ isValid: boolean }>`
  width: 420px;
  height: 48px;
  border-radius: 2px;
  background-color: #f9f9f9;
  padding: 12px 16px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #000000;
  border: none;

  :focus {
    outline: none;
    border-bottom: ${(props) =>
      !props.isValid ? "2px solid #ec0000" : "2px solid #1e1e1e"};
  }

  &::placeholder {
    font-family: NanumSquare;
    font-size: 16px;
    color: #b9bbc1;
  }
`;

export default InputBox;
