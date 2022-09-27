import React from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../App';
import { useContext } from "react";

const NavMenu = (props) => {

  const theme = useContext(ThemeContext);

  return (
    <div className="menu" >
        <Link to='/'style={{color: props.theme.foreground}}>Home</Link>
        <Link to='/page1' style={{color: props.theme.foreground}}>Page1</Link>
        <Link to='/page2' style={{color: props.theme.foreground}}>Page2</Link>
        <button onClick={props.changeMode}>DarkMode</button>
    </div>
  )
}

export default NavMenu