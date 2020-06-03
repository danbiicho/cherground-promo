import React, { useState, useReducer, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import reducer from "app/view/reducers/signupReducers";
import SignUpCont from "app/view/components/SignupCont";
import styled from "styled-components";
import Button from "app/view/widgets/Button";

//Router comp 받기 (페이지 맨 첫번째 뷰에는)
//SignupCont와 View따로 안 합쳐도 된다.

//Wrapper > Cont > Box

//UserDispatch는 컴포넌트 바깥에 reducer하나당 하나씩 만들어준다.

export const UserDispatch = React.createContext(null);

const SignUpViewPr: React.FunctionComponent<RouteComponentProps> = (props) => {
  const initialState = {
    stageIdx: 1,
    errorMsg: "",
    userInput: {
      name: "",
      password: "",
      passwordCheck: "",
      email: "",
    },
  };

  //여기서의 state는 전역이다.

  const [state, dispatch] = useReducer(reducer, initialState);
  const { stageIdx, errorMsg } = state;
  const { name, password, passwordCheck, email } = state.userInput;

  const loginHandler = () => {
    props.history.push("/login");
  };

  const nextBtnClickHandler = useCallback(() => {
    dispatch({
      type: "PROCEED_STAGE",
      stageIdx,
    });
    if (stageIdx >= 3) {
      props.history.push("/");
    }
  }, []);

  const userNameCheckHandler = useCallback((e) => {
    const { value } = e.target;

    dispatch({
      type: "NAME_CHECK",
      value,
    });
    if (!e.target.value) {
      console.log("이름을 입력해주세요");
    }
  }, []);

  const userValidateHandler = useCallback(
    (e) => {
      const IDPWCheck = /^[a-zA-Z0-9]{4,12}$/;
      const EmailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (e.target.name) {
        let inputName = e.target.name;
        const { value } = e.target;
        switch (inputName) {
          case "name":
            dispatch({
              type: "ADD_USER_INFO",
              inputName,
              value,
            });
            break;
          case "password":
            dispatch({
              type: "ADD_USER_INFO",
              inputName,
              value,
            });
            break;
          case "email":
            dispatch({
              type: "ADD_USER_INFO",
              inputName,
              value,
            });
            break;
        }
      }

      if (!e.target.value) {
        if (!name) {
          console.log("이름을 입력해주세요");
        }

        if (!email) {
          console.log("이메일을 입력해주세요");
        }

        if (!password) {
          console.log("비밀번호를 입력해주세요");
        }

        return false;
      } else {
        if (
          !validationCheckHandler(
            EmailCheck,
            email,
            "적합하지 않은 이메일 형식입니다."
          )
        ) {
          return false;
        }

        if (
          !validationCheckHandler(
            IDPWCheck,
            password,
            "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력"
          )
        ) {
          return false;
        }
      }
      if (password !== passwordCheck) {
        dispatch({
          type: "ADD_ERROR_MSG",
          message: "비밀번호가 일치하지 않습니다.",
        });
        return false;
      }
    },
    [name, email, password]
  );

  const validationCheckHandler = useCallback(
    (expression: RegExp, value: string, message: string) => {
      if (expression.test(value)) {
        return true;
      }
      dispatch({
        type: "ADD_ERROR_MSG",
        message,
      });
    },
    []
  );

  //props를 객체로 만들어서 index에 있는 걸 꺼내쓸수있게

  const txtProps: any = {
    headerTxt: {
      1: "회원가입",
      2: `${name}님 환영합니다.`,
    },
    descTxt: {
      1: "아래 정보를 입력하고 회원가입을 진행하세요.",
      2: "아래 정보를 입력하고 회원가입을 완료하세요.",
    },
  };

  return (
    //<UserDispatch.Provider value={dispatch}>
    <SignupViewWrapper>
      <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={txtProps.headerTxt[stageIdx]}
        descTxt={txtProps.descTxt[stageIdx]}
        userNameCheckHandler={(e) => userNameCheckHandler(e)}
        userValidateHandler={(e) => userValidateHandler(e)}
      />
      <ErrorMsg hasError={errorMsg}>{errorMsg}</ErrorMsg>
      <Button
        isEnable={false}
        onClick={nextBtnClickHandler}
        buttonName={"PRIMARY"}
        buttonText={"다음"}
      />
      <LoginCheckCont>
        이미 계정이 있나요?
        <LoginTxt
          onClick={() => {
            loginHandler();
          }}
        >
          로그인
        </LoginTxt>
      </LoginCheckCont>
      {stageIdx === 1 && (
        <CopyrightBox>
          <OwnerInfo>CherGround Inc. All rights reserved.</OwnerInfo>
        </CopyrightBox>
      )}
    </SignupViewWrapper>
    //</UserDispatch.Provider>
  );
};

const SignupViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMsg = styled.div<{ hasError: string }>`
  display: ${(props) => (props.hasError ? "block" : "none")};
  width: 420px;
  height: fit-content;
  font-size: 14px;
  color: #fd0000;
  font-family: NanumSquare;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 33px;
`;

const LoginCheckCont = styled.div`
  width: 420px;
  height: fit-content;
  font-family: NanumSquare;
  font-weight: 400;
  color: #1f263e;
`;

const LoginTxt = styled.span`
  margin-left: 8px;
  color: #1e1e1e;
  text-decoration: underline;
`;

const CopyrightBox = styled.div`
  width: 100%;
  height: 52px;
  border-top: 1px solid #eeeeee;
  background-color: #ffffff;
  margin-top: auto;
`;

const OwnerInfo = styled.p`
  font-family: NanumSquare;
  font-weight: 300;
  font-size: 12px;
  color: #7a7f8e;
  margin: 20px 0 19px 128px;
`;

export default SignUpViewPr;
