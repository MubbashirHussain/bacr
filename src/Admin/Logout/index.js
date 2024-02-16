import { useEffect, useState } from "react";
import "./index.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {

  let Navigate = useNavigate();
  let LogOut = () => {
    const token = Cookies.remove("Token");
    Navigate("/login");
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div >
          <button className="btn" onClick={LogOut}>Logout</button>
        </div>
      </div>
    </>
  );
}
