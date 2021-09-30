import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
    return (
        <Router>
            {/* <Header />
            <Switch>
                <Route path="/" exact={true}>
                    <HomePage />
                </Route>
                <Route path="/login" exact={true}>
                    <LoginPage />
                </Route>
                <Route path="/forgotpass" exact={true}>
                    <ForgotPass />
                </Route>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route path='/catalog' exact={true}>
                    <Catalogy />
                </Route>
                <Route path='/product-detail'>
                    <ProductDetail />
                </Route>
                <Route path='/product-list'>
                    <ProductList />
                </Route>
            </Switch>
            <Footer /> */}
        </Router>
    )
};