import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SourabhAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://th.bing.com/th/id/R.80823069d43755f498680799610a1b17?rik=cYBkt7UT1dsRTA&riu=http%3a%2f%2fwww.erblicken.com%2fwp-content%2fuploads%2f2016%2f06%2fFunny_Eddie.jpg&ehk=sSRJXSvtk1yMUa5jjb7jKLFt38h%2fl8OcR8ygUbrJJpE%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
