import React from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../App';
import { useContext } from "react";

const NavMenu = (props) => {

  const theme = useContext(ThemeContext);

  return (
    <div className="menu">
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
        <button onClick={props.changeMode}>DarkMode</button>
    </div>
  )
}

export default NavMenu