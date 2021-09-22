import React from "react";
import { NavData } from "./NavData";


const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="main_container">
          <div className="logo">
            <p>Logo</p>
          </div>
         
          <ul className="menu">
         
            {NavData.map((item) => {
              return (
                <a href="http://">
                  <li>{item.name}</li>
                </a>
              );
            })}
           
          </ul>
          <div className="button">
          <a href="http://">Login</a>
          <button className="btn">Register</button>
          </div>
          </div>
        </div>
     
    </>
  );
};

export default NavBar;
