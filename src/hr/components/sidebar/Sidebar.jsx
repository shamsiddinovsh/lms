import { ExpandLess, ExpandMore, MoveToInbox, StarBorder } from "@mui/icons-material";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";  
import Learning from '@mui/icons-material/SchoolOutlined';
import Study from '@mui/icons-material/LightbulbOutlined';
import Teacher from '@mui/icons-material/Person4Rounded';
import Students from '@mui/icons-material/LocalLibraryOutlined';
import Groups from '@mui/icons-material/Groups2Sharp';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const {t} = useTranslation(["locales"])
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="page-sidebar">
      <NavLink to="/hr" className="logo-box"> 
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
                <NavLink to="/hr" className="active">
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
              <NavLink to="/hr/menu">
                  <i className="menu-icon fa fa-calendar"></i>
                  <span>Users</span>
              </NavLink>
              </li> */}
              <li>
              <NavLink to="/hr/teacher">
                 <Teacher/>
                  <span style={{marginLeft:"10px"}}>{t("teachers")}</span>
              </NavLink>
              </li>
              <li>
              <NavLink to="/hr/student">
                  <Students/>
                  <span style={{marginLeft:"10px"}}>{t("students")}</span>
              </NavLink>
              </li>
              <li>
              <NavLink to="/hr/group">
                  <Groups/>
                  <span style={{marginLeft:"10px"}}>{t("groups")}</span>
              </NavLink>
              </li>
       
          <List sx={{ width: '100%', paddingLeft: "20px", color: "white"}} component="nav"  >
              <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{color: "white", minWidth: "35px"}}>
          <Learning />
        </ListItemIcon>
        <ListItemText primary={`${t("study")}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{marginBottom:"8px"}} disablePadding>
          <NavLink to="/hr/study/lang" className={"mySide"} >
            <ListItemIcon sx={{color: "white", minWidth: "35px"}} >
            <Study />
            </ListItemIcon>
            <ListItemText primary={`${t("lang_study")}`} />
          </NavLink>
        </List>
        <List component="div" sx={{marginBottom:"8px"}} disablePadding>
          <NavLink to="/hr/study/step" className={"mySide"} >
            <ListItemIcon sx={{color: "white", minWidth: "35px"}} >
            <Study />
            </ListItemIcon>
            <ListItemText primary={`${t("type_study")}`} />
          </NavLink>
        </List>
        <List component="div" sx={{marginBottom:"8px"}} disablePadding>
          <NavLink to="/hr/study/type" className={"mySide"} >
            <ListItemIcon sx={{color: "white", minWidth: "35px"}} >
            <Study />
            </ListItemIcon>
            <ListItemText primary={`${t("step_study")}`} />
          </NavLink>
        </List>
          </Collapse>
      </List>
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
