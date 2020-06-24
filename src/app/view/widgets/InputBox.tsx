import React, { useState } from "react";
import styled from "styled-components";

interface InputBoxProps {
  placeholderTxt: string;
  userPwCheckHandler?: (parameter: any) => void;
  userNameCheckHandler?: (parameter: any) => void;
  name?:
    | "userNameVal"
    | "phone"
    | "shippingAddress"
    | "email"
    | "name"
    | "password"
    | "passwordCheck"
    | "userIdval"
    | "userPwVal";
  userValidateHandler?: (parameter: any) => void;
  user?: "email" | "password";
  userIdCheckHandler?: (parameter: any) => void;
  userPwValCheckHandler?: (parameter: any) => void;
}

const InputBox: React.FunctionComponent<InputBoxProps> = (props) => {
  const [isValid, setIsValid] = useState("default");
  const { name } = props;

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

  const passwordStyler = (propName: any) => {
    if (propName === "password" || propName === "passwordCheck") {
      return "password";
    } else {
      return "text";
    }
  };

  return (
    <FormTagInput>
      <InputCont
        type={passwordStyler(name)}
        placeholder={props.placeholderTxt}
        isValid={isValid}
        onFocus={() => onFocusHandler()}
        onBlur={(e) => onBlurHandler(e)}
        onChange={(e) => {
          if (props.userIdCheckHandler) {
            props.userIdCheckHandler(e);
          }
          if (props.userPwValCheckHandler) {
            props.userPwValCheckHandler(e);
          }
          if (props.userValidateHandler) {
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

  &[type="password"] {
    font-family: caption;
  }

  &::placeholder {
    font-family: NanumSquare;
    font-size: 16px;
    color: #b9bbc1;
  }
`;

export default InputBox;
