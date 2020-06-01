import React, { useState } from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import SignUpComp from "app/view/components/SignupComp";
import styled from "styled-components";

//Router comp 받기 (페이지 맨 첫번째 뷰에는)
//SignupComp와 View따로 안 합쳐도 된다.

const SignUpView: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [matchId, setMatchId] = useState("login");

  return (
    <SignupViewWrapper>
      <SignUpComp
        match={props.match}
        matchId={1}
        headerTxt={"회원가입"}
        descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
      />
      <Link to={`/signup/${matchId}`}>
        <LoginCheckDiv>
          이미 계정이 있나요?<LoginTxt>로그인</LoginTxt>
        </LoginCheckDiv>
      </Link>
      <CopyrightBox>
        <Ptag>CherGround Inc. All rights reserved.</Ptag>
      </CopyrightBox>
    </SignupViewWrapper>
  );
};

const SignupViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginCheckDiv = styled.div`
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

const Ptag = styled.p`
  font-family: NanumSquare;
  font-weight: 300;
  font-size: 12px;
  color: #7a7f8e;
  margin: 20px 0 19px 128px;
`;

export default withRouter(SignUpView);
