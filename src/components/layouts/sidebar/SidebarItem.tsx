import React from "react";
import { NavItem } from "../../../configs/sidebar";

type SiderbarItemProps = {
  navItem: NavItem;
};

const SidebarItem = ({ navItem }: SiderbarItemProps) => {
  return (
    <div>
      <li key={navItem._id} className="nav-item">
        <a href="#" className="nav-link collapsed">
          <i className={navItem.icon}></i>
          <span>{navItem.name}</span>
        </a>
      </li>
    </div>
  );
};

export default SidebarItem;
