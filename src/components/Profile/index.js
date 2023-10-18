import React from "react";
import "./style.css";

function Profile() {
  return (
    <div className="icon-container selected">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/12/Shahrukh.Khan.jpg"
        width="30"
        height="30"
        className="profileImg"
      />
      <div>
        <p className="icon-text bold-profile">Evano</p>
        <p className="icon-text">Project Manager</p>
      </div>
    </div>
  );
}

export default Profile;
