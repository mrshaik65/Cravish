import React from "react";
import { assets } from "../../assets/assets";
import "./AppDownload.css"
const AppDownload = () => {
  return (
    <div id="app-download" className="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="playstore" className="" />
        <img src={assets.app_store} alt="appstore" className="" />
      </div>
    </div>
  );
};
export default AppDownload;
