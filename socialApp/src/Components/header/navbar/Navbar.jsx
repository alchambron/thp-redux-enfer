import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const cookie = Cookies.get("token");
  const navigate = useNavigate();

  function handleClick() {
    Cookies.remove("token");
    navigate("/");
  }

  return (
    <>
      <Link to="/">Home</Link>

      {cookie == null && cookie == undefined ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/profile">Profile</Link>
          <Link onClick={handleClick}>Disconnect</Link>
        </>
      )}
    </>
  );
}
