import { ChidlrenWithProps } from "../../types/common";
import React, { FC } from "react";
import Header from "./header";
import SideBar from "./sidebar";
import PageTitle from "./main/pageTitle/PageTitle";

interface LayoutProps {
  children?: JSX.Element;
  page: string;
}

const AdminLayout: FC<LayoutProps> = (props) => {
  return (
    <div className="w-full">
      <Header />
      <main id="main" className="main">
        <SideBar />
        <div className="h-full bg-white shadow-md rounded-[5px] p-[20px]">
          <PageTitle page={props.page} />
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
