import React from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
    <Navbar Link1={'/login'} Text1={'Login'} Link2={'/about'} Text2={'About'} Link3={'/'} Text3={'Home'}/>
    <br/>
    <h1>Welcome to the Contacts Page</h1>
    <h2>This website is a concept made by Aryan, it does not have any contact details yet</h2>
    <h2>Thank You</h2>
    </>
  )
}
