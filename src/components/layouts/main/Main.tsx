import React, { PropsWithChildren } from "react";
import "./main.css";
import PageTitle from "./pageTitle/PageTitle";
import Dashboard from "./dashboard/Dashboard";

const Main = ({children}: PropsWithChildren) => {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      {children}
    </main>
  );
};

export default Main;
