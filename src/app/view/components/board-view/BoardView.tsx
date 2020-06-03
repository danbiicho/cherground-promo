import React from "react";
import styled from "styled-components";
import ListBox from "app/view/components/asset/listBox/ListBox";
import Label from "app/view/widgets/Label";
import { RouteComponentProps } from "react-router-dom";

const BoardView: React.FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <BoardViewWrapper>
      <ListBox />
    </BoardViewWrapper>
  );
};

const BoardViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default BoardView;
