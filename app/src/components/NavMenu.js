import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div className="menu">
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
    </div>
  )
}

export default NavMenu