import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
        <Link to="/">Home</Link> <br></br>
        <Link to="/Profile">Profile</Link> <br></br>
        <Link to="/Movie">Previously Viewed</Link>
    </div>
  );
}

export default Navbar;