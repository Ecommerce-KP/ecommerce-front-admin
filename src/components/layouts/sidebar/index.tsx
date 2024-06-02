import React from "react";
import "./sidebar.css";
import SidebarItem from "./SidebarItem";
import navList from "../../../configs/sidebar";

const SideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {navList.map((navItem) => {
          if (navItem.children && navItem.children.length > 0) {
            return (
              <li className="nav-item" key={navItem._id}>
                <a
                  href={navItem.href}
                  className="nav-link collapsed"
                  data-bs-target={`#${navItem.target}`}
                  data-bs-toggle="collapse"
                >
                  <i className="bi bi-menu-button-wide"></i>
                  <span>{navItem.name}</span>
                  <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                  id={navItem.target}
                  className="nav-content collapse"
                  data-bs-parent="#sidebar-nav"
                >
                  {navItem.children.map((navChildItem) => (
                    <SidebarItem
                      key={navChildItem._id}
                      navItem={navChildItem}
                    />
                  ))}
                </ul>
              </li>
            );
          }

          return <SidebarItem key={navItem._id} navItem={navItem} />;
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
