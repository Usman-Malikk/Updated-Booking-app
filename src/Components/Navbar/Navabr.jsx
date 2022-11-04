import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navabr(props) {
  let navigate = useNavigate();

  let check = props.loginsec;
  return (
    <div className="navbar">
      <div className="navcon">
        <span className="logo">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Booking.com
          </h1>
        </span>
        <div className="navitem">
          {check !== "false" && (
            <button className="navbutton">List your property</button>
          )}
          <button className="navbutton">Register</button>
          {check !== "false" && <button className="navbutton" onClick={()=>{navigate("/login")}}>Login</button>}
        </div>
      </div>
    </div>
  );
}

export default Navabr;
