import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
         
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
         
          className="lInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
         
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
         
          className="lInput"
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
         
          className="lInput"
        />
      
        <input
          type="password"
          placeholder="password"
          id="password"
         
          className="lInput"
        />
         <input
          type="password"
          placeholder="confirm password"
          id="password"
         
          className="lInput"
        />
        <button  className="lButton">
          Register
        </button>
         <span></span>
      </div>
    </div>
  );
};

export default Register;