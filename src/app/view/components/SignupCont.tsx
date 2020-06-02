import React from "react";
import styled from "styled-components";
import InputBox from "../widgets/InputBox";

//받아야하는 prop의 타입을 정해줄 땐 이렇게 해준다.
//widget에 둬도 된다.

interface SignupContProps {
  match: any;
  matchId: any;
  headerTxt: string;
  descTxt: string;
  userNameCheckHandler?: (parameter: any) => void;
  userValidateHandler?: (parameter: any) => any;
}

const SignupCont: React.FunctionComponent<SignupContProps> = (props) => {
  const { matchId } = props;
  let boxIndexes: string[] = [];

  const checkBoxIndex = (matchId) => {
    if (matchId === 1) {
      boxIndexes = ["이름", "연락처", "기본 배송지"];
    } else if (matchId >= 2) {
      boxIndexes = ["사용자 명", "이메일", "비밀번호", "비밀번호 확인"];
    }
    return boxIndexes;
  };

  return (
    <SignupContWrapper>
      <SignupContCont>
        <HeadingArea>{props.headerTxt}</HeadingArea>
        <Desc>{props.descTxt}</Desc>
        <InputBoxCont>
          {checkBoxIndex(matchId).map((title, idx) => {
            if (idx === 0) {
              return (
                <InputBox
                  placeholderTxt={title}
                  userNameCheckHandler={props.userNameCheckHandler}
                  userValidateHandler={props.userValidateHandler}
                  name={"userName"}
                />
              );
            } else if (idx === 1) {
              return (
                <InputBox
                  placeholderTxt={title}
                  userValidateHandler={props.userValidateHandler}
                  name={"userEmail"}
                />
              );
            } else if (idx === 2) {
              return (
                <InputBox
                  placeholderTxt={title}
                  userValidateHandler={props.userValidateHandler}
                  name={"userPw"}
                />
              );
            } else if (idx === 3) {
              return (
                <InputBox
                  placeholderTxt={title}
                  userPwCheckHandler={props.userPwCheckHandler}
                  userValidateHandler={props.userValidateHandler}
                  name={"userPwCheck"}
                />
              );
            } else {
              return;
            }
          })}
        </InputBoxCont>
      </SignupContCont>
    </SignupContWrapper>
  );
};

const SignupContWrapper = styled.div`
  margin: 0 430px;
`;
const SignupContCont = styled.div`
  margin-top: 136px;
`;
const HeadingArea = styled.h2`
  font-family: NanumSquare;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  color: #1f263e;
  margin-bottom: 16px;
`;
const Desc = styled.h5`
  font-family: NanumSquare;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #1f263e;
`;

const InputBoxCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignupCont;
