import React, { useContext, useCallback } from "react";
import styled from "styled-components";
import InputBox from "../../../widgets/InputBox";
import Button from "app/view/widgets/Button";
import UserDispatch from "app/view/components/signup-view/SignUpView";

//받아야하는 prop의 타입을 정해줄 땐 이렇게 해준다.
//widget에 둬도 된다.

interface SignupContProps {
  match: any;
  matchId: any;
  headerTxt: string;
  descTxt: string;
  userValidateHandler?: (parameter: any) => void;
}

const SignupCont: React.FunctionComponent<SignupContProps> = (props) => {
  //const dispatch = useContext(UserDispatch);

  const { matchId } = props;

  const checkBoxIndex = (matchId: any) => {
    let boxIndexes: string[] = [];
    if (matchId === 1) {
      boxIndexes = ["이름", "연락처", "기본 배송지"];
    } else if (matchId >= 2) {
      boxIndexes = ["사용자 명", "이메일", "비밀번호", "비밀번호 확인"];
    }
    return boxIndexes;
  };

  //타입 지정을 안하게되면 자동적으로 타입추론을 하기때문에,
  //타입추론을 한 것과 InputBox에서 받아오는 prop데이터타입 속성이랑 일치하지않아 에러가 생긴다.

  const inputBoxNameChecker: InputBoxNameCheckerEnum[] = [
    "userNameVal",
    "phone",
    "shippingAddress",
    "name",
    "email",
    "password",
    "passwordCheck",
  ];

  type InputBoxNameCheckerEnum =
    | "userNameVal"
    | "phone"
    | "shippingAddress"
    | "name"
    | "email"
    | "password"
    | "passwordCheck";

  const inputSelector = (
    matchId: number,
    idx: number
  ): InputBoxNameCheckerEnum => {
    let inputBoxNames: InputBoxNameCheckerEnum[] = [];
    if (matchId === 1) {
      inputBoxNames = inputBoxNameChecker.filter((inputName, idx) => idx <= 2);
    } else {
      inputBoxNames = inputBoxNameChecker.filter((inputName, idx) => idx >= 3);
    }
    console.log(inputBoxNames);
    return inputBoxNames[idx];
  };

  //확인용
  // const checkDispatchItems = useCallback((e) => {
  //   const { value } = e.target;
  //   dispatch({
  //     type: "NAME_CHECK",
  //     value,
  //   });
  // }, []);

  return (
    <SignupContWrapper>
      <SignupContCont>
        <HeadingArea>{props.headerTxt}</HeadingArea>
        <Desc>{props.descTxt}</Desc>
        <InputBoxCont>
          {matchId === 1 &&
            checkBoxIndex(matchId).map((title, idx) => {
              return (
                <InputBox
                  placeholderTxt={title}
                  userValidateHandler={props.userValidateHandler}
                  name={inputSelector(matchId, idx)}
                />
              );
            })}
          {matchId === 2 &&
            checkBoxIndex(matchId).map((title, idx) => {
              return (
                <InputBox
                  placeholderTxt={title}
                  userValidateHandler={props.userValidateHandler}
                  name={inputSelector(matchId, idx)}
                />
              );
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
