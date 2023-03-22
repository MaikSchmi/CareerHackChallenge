import React from 'react';
import { Outlet, Link  } from "react-router-dom";

function Navbar() {
    
  return (
    <>
      <nav className="nav-bar-ctn">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/phones" className="nav-link">Phones</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
