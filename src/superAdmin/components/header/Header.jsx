import React from "react";
import $ from "jquery";
import AuthUser from "../auth/Auth"; 
import { NavLink } from "react-router-dom";

const Header = () => {
  const {token,logout} = AuthUser();
  const logoutUser = () => {
      if(token !== undefined){
          logout();
      }
  }
  const sidebarClick = () => {
    $(".page-sidebar, .page-content").toggleClass("open");
    return false;
  };
  return (
    <div className="page-header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <div className="logo-sm">
              <a href="/" id="sidebar-toggle-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-align-left"
                >
                  <line x1="17" y1="10" x2="3" y2="10"></line>
                  <line x1="21" y1="6" x2="3" y2="6"></line>
                  <line x1="21" y1="14" x2="3" y2="14"></line>
                  <line x1="17" y1="18" x2="3" y2="18"></line>
                </svg>
              </a>
              <a className="logo-box" href="https://lms.tuit.uz">
                <span></span>
              </a>
            </div>

            <div className="burger" onClick={sidebarClick}>
              {/* <a href="" id="collapsed-sidebar-toggle-button" style="padding-top: 18px; margin-left:0"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="feather feather-align-left"
              >
                <line x1="17" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="17" y1="18" x2="3" y2="18"></line>
              </svg>
              {/* </a> */}
            </div>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <p href="#" className="text-right text-blue server-time">
                  <span>Время сервера</span>
                  <br />
                  <strong>05.03.2023 | 16:41</strong>
                </p>
              </li>

              <li>
                <NavLink to="/superadmin" className="text-blue btn  border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="feather feather-video"
                  >
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                  </NavLink>
              </li>
              <li className="dropdown">
                <button type="button" className="btn btn-danger" onClick={logoutUser} >Chiqish</button>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
    </div>
  );
};

export default Header;
