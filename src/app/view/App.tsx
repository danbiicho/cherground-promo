import "reflect-metadata";
import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import Button from "./widgets/Button";
//import { View, Widget } from "app/view";
import InputBox from "./widgets/InputBox";
import SignUpView from "app/view/components/signup-view/SignUpView";
import LogInView from "app/view/components/login-view/LogInView";
//LogInView from "app/view/components/login-view/LogInView";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Suspense fallback={<Widget.Modal.DataLoading />}> */}
      <Switch>
        <Route exact path="/test" component={InputBox} />
        <Route path="/button" exact component={Button} />
        <Route path="/buttontest" exact component={LogInView} />
        <Route exact path="/signup" component={SignUpView} />
      </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default App;
