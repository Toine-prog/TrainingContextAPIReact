import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const NavMenu = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="menu">
      <Link to="/" style={{ color: themeContext.theme.foreground }}>
        Home
      </Link>
      <Link to="/page1" style={{ color: themeContext.theme.foreground }}>
        Page1
      </Link>
      <Link to="/page2" style={{ color: themeContext.theme.foreground }}>
        Page2
      </Link>
      <button onClick={themeContext.changeMode}>DarkMode</button>
    </div>
  );
};

export default NavMenu;
