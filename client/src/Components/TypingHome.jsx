import "../StyleSheets/TypingHome.css";

import React from "react";

const TypingHome = () => {
  return (
    <>
    {/* Created a navbar and divided it into two parts left and right */}
      <div className="home-navbar-container">
        <div className="home-navbar-left-container">
          <a href="/" style={{fontSize: "1.8rem"}}>Typing Dash Pro</a>
        </div>
        <div className="home-navbar-right-container">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default TypingHome;
