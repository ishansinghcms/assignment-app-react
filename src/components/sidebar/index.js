import React, { useState, useEffect } from "react";
import "./style.css";
import SidebarLink from "../sidebarLinks/index";
import Profile from "../Profile";
import { useData } from "../../DataContext";

function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { setSharedData } = useData();
  const toggleSidebar = () => {
    setIsMobile(!isMobile);
    setIsButtonPressed(!isButtonPressed);
    setSharedData(!isButtonPressed);
  };

  const toggleSidebarClose = () => {
    setIsMobile(!isMobile);
    setIsButtonPressed(!isButtonPressed);
    setSharedData(!isButtonPressed);
  };

  useEffect(() => {
    setSharedData(false);
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsButtonPressed(isButtonPressed);
      setSharedData(isButtonPressed);
    };
    let timeoutId;
    const debounceHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 1);
    };

    window.addEventListener("resize", debounceHandleResize);
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div className="btn-container">
          <button className="toggle-button" onClick={toggleSidebar}>
            &#x2630; Menu
          </button>
        </div>
      )}
      {isMobile || (
        <div className="sidebar">
          <div className="top-container">
            <h4 className="sidebar-link-container">
              <span className="material-symbols-outlined">token</span> Dashboard
            </h4>
            <SidebarLink isButtonPressed={isButtonPressed} />
          </div>
          <Profile />
          {isButtonPressed && (
            <div className="btn-container">
              <button
                className="toggle-button close-btn"
                onClick={toggleSidebarClose}
              >
                &#x2630; Close Menu
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Sidebar;
