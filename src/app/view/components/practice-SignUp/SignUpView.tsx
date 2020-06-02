import React, { useState, Key } from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import SignUpCont from "app/view/components/SignupCont";
import styled from "styled-components";
import Button from "app/view/widgets/Button";
import { IndexAttachment } from "aws-sdk/clients/clouddirectory";

//Router comp 받기 (페이지 맨 첫번째 뷰에는)
//SignupCont와 View따로 안 합쳐도 된다.

//Wrapper > Cont > Box

const SignUpView: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [stageStatus, setStageStatus] = useState<
    "usernamecheck" | "usernamecheck" | "usernamecheck"
  >("usernamecheck");
  const [stageIdx, setStageIdx] = useState<any>(1);
  const [userName, setUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const loginHandler = () => {
    props.history.push("/signin");
  };

  const nextBtnClickHandler = () => {
    setStageIdx((stageIdx) => (stageIdx += 1));
    if (stageIdx >= 3) {
      props.history.push("/");
    }
  };

  const userNameCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      console.log("이름을 입력해주세요");
    }
  };

  const userValidateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const IDPWCheck = /^[a-zA-Z0-9]{4,12}$/;
    const EmailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (e.target.name) {
      let { name } = e.target;

      switch (name) {
        case "userName":
          setUserName(e.target.value);
          break;
        case "userPw":
          setUserPw(e.target.value);
          break;
        case "userEmail":
          setUserEmail(e.target.value);
          break;
      }
    }

    if (!e.target.value) {
      if (!userName) {
        console.log("이름을 입력해주세요");
      }

      if (!userEmail) {
        console.log("이메일을 입력해주세요");
      }

      if (!userPw) {
        console.log("비밀번호를 입력해주세요");
      }

      return false;
    } else {
      if (
        !validationCheckHandler(
          EmailCheck,
          userEmail,
          "적합하지 않은 이메일 형식입니다."
        )
      ) {
        return false;
      }

      if (
        !validationCheckHandler(
          IDPWCheck,
          userPw,
          "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력"
        )
      ) {
        return false;
      }
    }
  };

  const validationCheckHandler = (
    expression: RegExp,
    value: string,
    message: string
  ) => {
    if (expression.test(value)) {
      return true;
    }
    setErrorMsg(message);
    console.log(message);
  };

  const signupStage = {
    1: (
      <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={"회원가입"}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
        userNameCheckHandler={(e) => userNameCheckHandler(e)}
      />
    ),
    2: (
      <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={`${userName}님 환영합니다.`}
        descTxt={"아래 정보를 입력하고 회원가입을 완료하세요."}
        userValidateHandler={(e) => userValidateHandler(e)}
      />
    ),
    3: (
      <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={`${userName}님 환영합니다.`}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
        userValidateHandler={(e) => userValidateHandler(e)}
      />
    ),
  };

  return (
    <SignupViewWrapper>
      {/* {stageStatus === "usernamecheck" && (
        <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={`${userName}님 환영합니다.`}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
        userValidateHandler={(e) => userValidateHandler(e)}
      />
      )}
      {stageStatus === "usernamecheck" && (
        <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={`${userName}님 환영합니다.`}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
        userValidateHandler={(e) => userValidateHandler(e)}
      />
      )}
      {stageStatus === "usernamecheck" && (
        <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={`${userName}님 환영합니다.`}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
        userValidateHandler={(e) => userValidateHandler(e)}
      />
      )} */}
      {signupStage[stageIdx]}
      <Button
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
  );
};

const SignupViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default withRouter(SignUpView);