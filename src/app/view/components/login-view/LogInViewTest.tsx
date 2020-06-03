import React, { useReducer, useCallback } from "react";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import reducer from "app/view/reducers/loginReducers";
import InputBox from "app/view/widgets/InputBox";
import Button from "app/view/widgets/Button";
import { UserViewModel } from "app/view-model";
import container from "injector";

const LogInViewTest: React.FunctionComponent<RouteComponentProps> = (props) => {
  const viewModel: UserViewModel = container.get<UserViewModel>(
    "UserViewModel"
  );

  // useReducer 사용할 때 먼저 initialize
  const initiallUserState = {
    userName: "",
    userPw: "",
    idErrorMsg: "",
    pwErrorMsg: "",
  };

  const [state, dispatch] = useReducer(reducer, initiallUserState);
  const { userName, userPw, idErrorMsg, pwErrorMsg } = state;

  const user = viewModel.displayUser();
  //console.log(viewModel.displayUser());

  const goSignUpView = () => {
    props.history.push(`/signup`);
  };

  const userValidateHandler = useCallback((e) => {
    if (!e.target.value) {
      console.log("아이디와 비밀번호를 입력 해주세요");
    }
    return false;
  }, []);

  const userNameCheckHandler = useCallback((e) => {
    const { value } = e.target;

    dispatch({
      type: "NAME_CHECK",
      value,
    });
  }, []);

  const userPwCheckHandler = useCallback((e) => {
    const { value } = e.target;

    dispatch({
      type: "PASSWORD_CHECK",
      value,
    });
  }, []);

  const loginHandler = useCallback((e) => {
    if (userName !== user[0].id) {
      dispatch({
        type: "ADD_ID_ERROR_MSG",
        message: "아이디가 일치하지 않습니다.",
      });
    }

    if (userPw !== user[0].password) {
      dispatch({
        type: "ADD_PW_ERROR_MSG",
        message: "비밀번호가 일치하지 않습니다.",
      });
    }

    if (userName === user[0].id && userPw === user[0].password) {
      props.history.push(`/`);
    } else {
      console.log("아이디와 비밀번호를 확인해주세요");
    }
  }, []);

  return (
    <LogInViewWrapper>
      <LogInViewContainer>
        <HeaderTxt>로그인</HeaderTxt>
        <InputBox
          placeholderTxt={"아이디"}
          userValidateHandler={userValidateHandler}
          userNameCheckHandler={userNameCheckHandler}
          name={"userId"}
        />

        <IdErrorMsg hasError={idErrorMsg}>{idErrorMsg}</IdErrorMsg>
        <InputBox
          placeholderTxt={"비밀번호"}
          userValidateHandler={userValidateHandler}
          userPwCheckHandler={userPwCheckHandler}
          name={"userPw"}
        />
        <PwErrorMsg hasError={pwErrorMsg}>{pwErrorMsg}</PwErrorMsg>
        <PasswordFind>비밀번호 찾기</PasswordFind>
        <Button
          isEnable
          buttonName={"PRIMARY"}
          buttonText={"로그인"}
          onClick={loginHandler}
        />
        <Button
          isEnable
          buttonName={"SECONDARY"}
          buttonText={"회원가입"}
          onClick={goSignUpView}
        />
      </LogInViewContainer>
      <CopyrightBox>
        <CompanyInfo>CherGround Inc. All rights reserved.</CompanyInfo>
      </CopyrightBox>
    </LogInViewWrapper>
  );
};

const LogInViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogInViewContainer = styled.div`
  width: 420px;
  height: fit-content;
  margin-top: 136px;
`;

const HeaderTxt = styled.p`
  height: 31px;
  font-family: NanumSquare;
  font-size: 28px;
  color: #1f263e;
  text-align: center;
  margin: 0 0 40px 0;
`;

const IdErrorMsg = styled.div`
  width: 420px;
  height: 16px;
  font-size: 14px;
  color: #fd0000;
  font-family: NanumSquare;
  font-weight: 400;
  margin-top: 13px;
  margin-bottom: 16px;
`;

const PwErrorMsg = styled.div`
  width: 420px;
  height: 16px;
  font-size: 14px;
  color: #fd0000;
  font-family: NanumSquare;
  font-weight: 400;
  margin-top: 13px;
  margin-bottom: 16px;
`;

const PasswordFind = styled.p`
  margin: 12px 0 32px 0;
  font-family: NanumSquare_acR;
  font-size: 14px;
  text-decoration: underline;
  text-align: right;
  color: #1f263e;
`;

const CopyrightBox = styled.div`
  width: 100%;
  height: 52px;
  border-top: 1px solid #eeeeee;
  background-color: #ffffff;
  margin-top: auto;
`;

const CompanyInfo = styled.p`
  font-family: NanumSquare;
  font-weight: 300;
  font-size: 12px;
  color: #7a7f8e;
  margin: 20px 0 19px 128px;
`;

export default withRouter(LogInViewTest);