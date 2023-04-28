import React from "react";
import { NavLink } from "react-router-dom";
import AuthUser from "../auth/Auth";
import Groups from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home'; 
import { decodeToken } from "react-jwt";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const {t} = useTranslation("locales")
  const {getToken} = AuthUser();
  const token = getToken();
  const data = decodeToken(token);  
  return (
    <div className="page-sidebar">
      <NavLink to="/teacher" className="logo-box"> 
      <div>
          <img
            src="https://lms.tuit.uz/assets/images/logo-md.png"
            alt=""
            height="40"
          />
          <div style={{display:"flex",flexDirection:"column",alignItems:"baseline"}}>
          <span>Learning</span> 
          <span>Management System</span>  
          </div>
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
                <NavLink to="/teacher" className="active"> 
                <HomeIcon/>
                  <span style={{marginLeft:"10px"}}>{t('dashboard')}</span>
                </NavLink>
              </li>
              <li></li>
              <li className="menu-divider"></li>

              <li>
                <div className="page-sidebar__title">Menu</div>
              </li>
              <li></li>

              {/* <li>
              <NavLink to="/teacher/menu">
                  <i className="menu-icon fa fa-calendar"></i>
                  <span>Menu</span>
              </NavLink>
              </li> */}

              <li>
              <NavLink to={`/teacher/group/${(data) ? data.id : ''}`}> 
                  <Groups/>
                  <span style={{marginLeft:"10px"}}>{t('groups')}</span>
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
