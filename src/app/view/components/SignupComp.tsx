import React from "react";
import styled from "styled-components";
import InputBox from "../widgets/InputBox";

interface SignupCompProps {
  headerTxt: string; 
  descTxt: string;
}

const SignupComp: React.FunctionComponent<SignupCompProps> = (props) => {
  console.log(props);

  const { headerTxt, descTxt } = props;

  return (
    <SignupCompWrapper>
      <SignupCompCont>
        <HeadingArea>{headerTxt}</HeadingArea>
        <Desc>{descTxt}</Desc>
        <InputBoxCont>
          <InputBox />
          <InputBox />
          <InputBox />
          <InputBox />
        </InputBoxCont>
      </SignupCompCont>
    </SignupCompWrapper>
  );
};

const SignupCompWrapper = styled.div`
  margin: 0 430px;
`;
const SignupCompCont = styled.div`
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

export default SignupComp;
