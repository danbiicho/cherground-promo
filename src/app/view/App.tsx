import "reflect-metadata";
import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GlobalStyle from "app/view/style/GlobalStyle";
import Button from "./widgets/Button";
//import { View, Widget } from "app/view";
import InputBox from "./widgets/InputBox";
import SignUpView from "app/view/components/signup-view/SignUpView";
import SignupComp from "./components/SignupComp";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Suspense fallback={<Widget.Modal.DataLoading />}> */}
      <Switch>
        {/* <Route path="/dashboard" exact component={View.DashboardView} />
          <Route path="/sign-up" exact component={View.SignUpView} />
          <Route path="/register" exact component={View.RegisterView} />
          <Route path="/privacy" exact component={View.PrivacyPolicyView} />
          <Route path="/terms" exact component={View.TermOfUseView} />
          <Route path="/billing" exact component={View.BillingView} />
          <Route path="/billing/invoice" exact component={View.InvoiceView} />
          <Route path="/billing/receipt" exact component={View.ReceiptView} />
          <Route path="/order" exact component={View.OrderView} />
          <Route path="/order/detail" exact component={View.OrderDetailView} /> */}
        {/* <Route path="/wholesale" exact component={View.WholesaleView} />
                    <Route path="/wholesale/detail" exact component={View.WholesaleDetailView} /> */}
        {/* <Route path="/setting" exact component={View.RetailSettingView} />
          <Route path="/user" exact component={View.UserSettingView} /> */}
        <Route exact path="/test" component={InputBox} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/signup/:matchId" component={SignupComp} />
        <Route path="/button" exact component={Button} />
      </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default App;
