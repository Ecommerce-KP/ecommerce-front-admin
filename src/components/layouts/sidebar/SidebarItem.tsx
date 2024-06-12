import React from "react";
import { NavItem } from "../../../configs/sidebar";
import { Link } from "react-router-dom";

type SiderbarItemProps = {
  navItem: NavItem;
};

const SidebarItem = ({ navItem }: SiderbarItemProps) => {
  return (
    <div>
      <li key={navItem._id} className="nav-item">
        <Link to={navItem.href} className="nav-link collapsed">
          <i className={navItem.icon}></i>
          <span>{navItem.name}</span>
        </Link>
      </li>
    </div>
  );
};

export default SidebarItem;
