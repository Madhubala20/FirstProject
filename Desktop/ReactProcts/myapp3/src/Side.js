import React, { useState } from "react";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SidebarDemo() {
  const [navCollapse, setNavCollapse] = useState(false);
  const [smallNavCollapse, setSmallNavCollapse] = useState(false);

  return (
//     <div>
//         <nav className="nav">
//        <div className="logo">
//     <h2>Project with sidebar</h2>
//          <i
//         className="bi bi-justify largeDeviceIcon"
//        onClick={() => setNavCollapse(!navCollapse)}
//     ></i>
//          <i
//        className="bi bi-justify smallDeviceIcon"
//        onClick={() => setSmallNavCollapse(!smallNavCollapse)}
//      ></i>
//  </div>

    //  <ul>
    //      <li>Home</li>
    //      <li>New Blog</li>
    //    </ul>
    //  </nav>
    // </div>
    //new comment
    <div >
      <nav className="nav">
        <div className="logo">
          <h2>Project with sidebar</h2>
          <i
            className="bi bi-justify largeDeviceIcon"
            onClick={() => setNavCollapse(!navCollapse)}
          ></i>
          <i
            className="bi bi-justify smallDeviceIcon"
            onClick={() => setSmallNavCollapse(!smallNavCollapse)}
          ></i>
        </div>

        <ul>
          <li>Home</li>
          <li>New Blog</li>
        </ul>
      </nav>
      <div
        className={`${smallNavCollapse ? "smallNav " : ""}${
          navCollapse ? "navCollapse" : ""
        } sidebar-content`}
      >
        <div className="sidebar-container">
          <div className="nav-option option1">
            <i className="bi bi-speedometer2"></i>
            <h3 className="dash">Dashboard</h3>
          </div>

          <div className="nav-option option1">
            <i className="bi bi-clipboard-pulse"></i>
            <h3 className="dash1">Articles</h3>
          </div>

          <div className="nav-option option1">
            <i className="bi bi-box"></i>
            <h3 className="dash2">Product</h3>
          </div>

          <div className="nav-option option1">
            <i className="bi bi-bag-fill"></i>
            <h3 className="dash3">Order</h3>
          </div>
          <div className="nav-option option1">
            <i className="bi bi-chat-square-text"></i>
            <h3 className="dash4">Report</h3>
          </div>

          <div className="nav-option option1">
            <i className="bi bi-gear"></i>
            <h3 className="dash5">Setting</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarDemo;