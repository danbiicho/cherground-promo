import "reflect-metadata";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import SignUpView from "app/view/components/signup-view/SignUpView";
import SignUpViewPr from "app/view/components/practice-SignUp/SignUpViewPr";
import LogInView from "app/view/components/login-view/LogInView";
import LogInViewTest from "app/view/components/login-view/LogInViewTest";
import BoardView from "app/view/components/board-view/BoardView";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignUpView} />
        <Route path="/login" exact component={LogInView} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/test" component={SignUpViewPr} />
        <Route exact path="/logintest" component={LogInViewTest} />
        <Route exact path="/board" component={BoardView} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
