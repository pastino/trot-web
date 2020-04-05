import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import InfoProtection from "../routes/InfoProtection";

const FirstView = () => (
  <>
    <Route exact path="/" component={InfoProtection} />
  </>
);

const AppRouter = () => <Router>{FirstView}</Router>;

export default AppRouter;
