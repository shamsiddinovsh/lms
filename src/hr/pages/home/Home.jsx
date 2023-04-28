import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar"; 


const Home = () => {
  return (
    
    <div className="wrapper">
   
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <Header />

        <div className="page-inner">
          <Outlet />
          <div className="page-footer">
            <div className="row">
              <div className="col-xs-12 text-right">
                <a href="https://t.me/joinchat/AAAAAE3uzCvQS5qsLRawWw">
                  <i className="fa fa-telegram f-s-20" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default Home;
