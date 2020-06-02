import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
        <Link to="/">Search</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Movie">Your last viewed Movie</Link>
    </div>
  );
}

export default Navbar;