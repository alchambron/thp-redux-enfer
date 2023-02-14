import React, { useState } from 'react'
import useFetch from '../../../Tools/useFetch'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: " ",
    email: " ", 
    password: " ", 
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  async function handleSubmit(event){
    event.preventDefault()
    const sendData = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    const data = await useFetch("http://localhost:1337/api/auth/local/register", sendData)
    const token = await data.jwt

    Cookies.set("token", token);

    navigate("/")
  }

  return (
    <>
    <form action="" method="post" onSubmit={handleSubmit}>

      <label>username</label>
      <input type="text" id="username" onChange={handleChange}/>

      <label>email</label>
      <input type="email" id="email" onChange={handleChange}/>

      <label>password</label>
      <input type="password" id="password" onChange={handleChange} />

      <input type="submit" />
    </form>
    </>
  )
}
