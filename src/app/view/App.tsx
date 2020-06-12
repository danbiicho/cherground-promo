import "reflect-metadata";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import LogInView from "app/view/components/login-view/LogInView";
import OrderstatusView from "app/view/components/orderstatus-view/OrderStatusView";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LogInView} />
        <Route exact path="/order" component={OrderstatusView} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
