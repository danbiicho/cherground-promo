import "reflect-metadata";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import SignUpView from "app/view/components/signup-view/SignUpView";
import SignUpViewPr from "app/view/components/practice-SignUp/SignUpViewPr";
import LogInView from "app/view/components/login-view/LogInView";
import DropDownBox from "app/view/widgets/DropDownBox";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignUpView} />
        <Route path="/login" exact component={LogInView} />
        <Route exact path="/signup" component={SignUpViewPr} />
        <Route exact path="/test" component={DropDownBox} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
