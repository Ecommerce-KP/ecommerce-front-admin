import { ChidlrenWithProps } from "../../types/common";
import React, { FC } from "react";
import Header from "./header";
import SideBar from "./sidebar";

interface LayoutProps {
  children?: JSX.Element;
}

const AdminLayout: FC<LayoutProps> = (props) => {
  return (
    <div>
      <Header />
      <SideBar />
      {props.children}
    </div>
  );
};

export default AdminLayout;
