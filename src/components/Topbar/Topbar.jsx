import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const Topbar = () => {
  const { user } = useContext(Context);
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
      {
        user ? (
        <img
        className="topImg"
        src="https://lh3.googleusercontent.com/ogw/ADea4I4RRWSilQr_8R8GGiLEU5dITRp4qdWmCL5s4TJPPw=s83-c-mo"
        alt="" />

        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">REGISTER</Link>
            </li>
          </ul>
        )
      }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar;
