import React from "react";
import { RouteComponentProps } from "react-router-dom";
import SignUpComp from "app/view/components/SignupComp";
//Router comp 받기 (페이지 맨 첫번째 뷰에는)

const SignUpView: React.FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <SignUpComp
      headerTxt={"회원가입"}
      descTxt={"아래 정보를 입력하고 회원가입을 진행하세요."}
    />
  );
};

export default SignUpView;
