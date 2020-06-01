import "reflect-metadata";
import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import InputBox from "./widgets/InputBox";
import SignUpView from "app/view/components/signup-view/SignUpView";
import SignupComp from "./components/SignupComp";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Suspense fallback={<Widget.Modal.DataLoading />}> */}
      <Switch>
        <Route exact path="/test" component={InputBox} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/signup/:matchId" component={SignupComp} />
      </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default App;
