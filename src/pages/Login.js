import React from 'react'
import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <>
    <Navbar Link1={'/'} Text1={'Home'} Link2={'/about'} Text2={'About'} Link3={'/contact'} Text3={'Contact'}/>
    <br/>
    <h1>Login</h1>
    <form>
      <label>
        Username:
        <input type="text" name="email" />
      </label>
      <br/>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <br/>
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}
