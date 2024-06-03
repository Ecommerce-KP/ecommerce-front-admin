import React from "react";
import Header from "../components/layouts/header";
import SideBar from "../components/layouts/sidebar";
import Main from "../components/layouts/main/Main";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Main />
    </div>
  );
};

export default Dashboard;
