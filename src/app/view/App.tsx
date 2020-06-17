import "reflect-metadata";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import LogInViewTest from "app/view/components/login-view/LogInViewTest";
import SignUpView from "app/view/components/signup-view/SignUpView";
import OrderstatusView from "app/view/components/orderstatus-view/OrderStatusView";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LogInViewTest} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/order" component={OrderstatusView} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
