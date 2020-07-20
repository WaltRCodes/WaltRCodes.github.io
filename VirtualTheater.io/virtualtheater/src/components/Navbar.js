import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
  return (
      <div className="nav-bar">
        <div className="space"></div>
        <Link to="/Movie">Previously Viewed</Link>
        <Link to="/Profile">Profile</Link> <br></br>
        <Link to="/">Home</Link> <br></br>
      </div>
  );
}

export default Navbar;