import React from "react";
import "./main.css";
import PageTitle from "./pageTitle/PageTitle";
import Dashboard from "./dashboard/Dashboard";

const Main = () => {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      <Dashboard />
    </main>
  );
};

export default Main;
