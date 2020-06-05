import React, { useState, forwardRef } from "react";
import styled from "styled-components";

interface InputBoxProps {
  placeholderTxt: string;
  userNameCheckHandler?: (parameter: any) => void;
  userPwCheckHandler?: (parameter: any) => void;
  name: "name" | "email" | "password" | "passwordCheck";
  userValidateHandler: (parameter: any) => boolean | undefined;
}

const InputBox: React.FunctionComponent<InputBoxProps> = (props) => {
  const [isValid, setIsValid] = useState("default");

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsValid("isNotValid");
    } else {
      setIsValid("default");
    }
  };

  const onFocusHandler = () => {
    setIsValid("isValid");
  };

  return (
    <FormTagInput>
      <InputCont
        type="text"
        placeholder={props.placeholderTxt}
        isValid={isValid}
        onFocus={() => onFocusHandler()}
        onBlur={(e) => onBlurHandler(e)}
        onChange={(e) => {
          if (props.userNameCheckHandler) {
            props.userNameCheckHandler(e);
          }
          if (props.userPwCheckHandler) {
            props.userPwCheckHandler(e);
          } else {
            props.userValidateHandler(e);
          }
        }}
        name={props.name}
      />
    </FormTagInput>
  );
};

const FormTagInput = styled.form`
  margin-bottom: 16px;
`;

const InputCont = styled.input<{ isValid: string }>`
  width: 420px;
  height: 48px;
  border-radius: 2px;
  background-color: #f9f9f9;
  padding: 12px 16px;
  font-family: NanumSquare;
  font-size: 16px;
  color: #000000;
  border: none;
  border-bottom: ${(props) => {
    if (props.isValid === "isValid") {
      return "2px solid #1e1e1e";
    } else if (props.isValid === "isNotValid") {
      return "2px solid #ec0000";
    } else if (props.isValid === "default") {
      return "none";
    } else {
      return;
    }
  }};

  &::placeholder {
    font-family: NanumSquare;
    font-size: 16px;
    color: #b9bbc1;
  }
`;

export default InputBox;
