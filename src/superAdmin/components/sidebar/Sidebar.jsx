import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="page-sidebar">
       <NavLink to="/superadmin" className="logo-box"> 
        <div>
          <img
            src="https://lms.tuit.uz/assets/images/logo-md.png"
            alt=""
            height="40"
          />
          <span>
            Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari
            Universiteti
          </span>
        </div>
        <i
          className="icon-radio_button_checked"
          id="fixed-sidebar-toggle-button"
        ></i>
        <i className="icon-close" id="sidebar-toggle-button-close"></i>
        </NavLink>
      <div className="slimScrollDiv mm-active slim-actives">
        <div className="page-sidebar-inner sss mm-show">
          <div className="page-sidebar-menu mm-active" id="sidebar-menu">
            <ul className="accordion-menu metismenu mm-show" id="side-menu">
              <li className="mm-active">
              <NavLink to="/superadmin" className="active">
                  <i className="menu-icon fa fa-dashboard"></i>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li></li>
              <li className="menu-divider"></li>

              <li>
                <div className="page-sidebar__title">Menu</div>
              </li>
              <li></li>

              <li>
              <NavLink to="/superadmin/menu">
                  <i className="menu-icon fa fa-calendar"></i>
                  <span>Users</span>
              </NavLink>
              </li>
              <li>
              <NavLink to="/superadmin/admin">
                  <i className="menu-icon fa fa-calendar"></i>
                  <span>Admin users</span>
              </NavLink>
              </li>
              <li>
              <NavLink to="/superadmin/hr">
                  <i className="menu-icon fa fa-calendar"></i>
                  <span>HR users</span>
              </NavLink>
              </li>
              <li>
              <NavLink to="/superadmin/teacher">
                  <i className="menu-icon fa fa-calendar"></i>
                  <span>Teachers</span>
              </NavLink>
              </li>
              <li>
              <NavLink to="/superadmin/student">
                  <i className="menu-icon fa fa-calendar"></i>
                  <span>Students</span>
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="slimScrollBar"></div>
        <div className="slimScrollRail"></div>
      </div>
    </div>
  );
};

export default Sidebar;
