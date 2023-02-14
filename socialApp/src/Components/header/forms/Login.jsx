import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Tools/useFetch";

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: " ",
    password: " ",
  });

  const navigate = useNavigate()

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e){
    e.preventDefault();
    const sendData = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    const data = await useFetch("http://localhost:1337/api/auth/local", sendData)
    const token = await data.jwt

    Cookies.set("token", token)

    navigate("/")
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>email</label>
        <input type="email" id="identifier" onChange={handleChange}/>

        <label>password</label>
        <input type="password" id="password" onChange={handleChange} />

        <input type="submit" />
      </form>
    </>
  );
}
