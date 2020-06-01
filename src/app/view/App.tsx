import "reflect-metadata";
import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import Button from "./widgets/Button";
//import { View, Widget } from "app/view";
import SignUpView from "app/view/components/signup-view/SignUpView";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignUpView} />
        <Route exact path="/signup" component={SignUpView} />
        <Route path="/button" exact component={Button} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
