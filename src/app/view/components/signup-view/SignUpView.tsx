import React, { useState } from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import SignUpCont from "app/view/components/SignupCont";
import styled from "styled-components";
import Button from "app/view/widgets/Button";

//Router comp 받기 (페이지 맨 첫번째 뷰에는)
//SignupCont와 View따로 안 합쳐도 된다.

//Wrapper > Cont > Box

const SignUpView: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [stageIdx, setStageIdx] = useState(1);
  const [userName, setUserName] = useState("");

  const loginHandler = () => {
    props.history.push("/signin");
  };

  const nextBtnClickHandler = () => {
    setStageIdx((stageIdx) => (stageIdx += 1));
    if (stageIdx >= 3) {
      props.history.push("/");
    }
  };

  const memorizeUserName = (e) => {
    setUserName(e.target.value);
  };

  const signupStage = {
    1: (
      <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={"회원가입"}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
        userNameHandler={memorizeUserName}
      />
    ),
    2: (
      <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={`${userName}님 환영합니다.`}
        descTxt={"아래 정보를 입력하고 회원가입을 완료하세요."}
        userNameHandler={memorizeUserName}
      />
    ),
    3: (
      <SignUpCont
        match={props.match}
        matchId={stageIdx}
        headerTxt={`${userName}님 환영합니다.`}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
        userNameHandler={memorizeUserName}
      />
    ),
  };

  return (
    <SignupViewWrapper>
      {signupStage[stageIdx]}
      <Button
        onClick={nextBtnClickHandler}
        buttonName={"primary"}
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
