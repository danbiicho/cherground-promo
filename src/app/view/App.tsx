import "reflect-metadata";
import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import InputBox from "./widgets/InputBox";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Suspense fallback={<Widget.Modal.DataLoading />}> */}
      <Switch>
        <Route exact path="/test" component={InputBox} />
      </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default App;
