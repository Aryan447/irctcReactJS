import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
    <Navbar Link1={'/login'} Text1={'Login'} Link2={'/'} Text2={'Home'} Link3={'/contact'} Text3={'Contact'}/>
    <br/>
    <h1>Hey there, I am Aryan</h1>
    <h3>I made this website purely using ReactJS hope you like it, you can also give me suggesions on my instagram</h3>
    <a href="https://www.instagram.com/ar.yan_" target="_blank" rel="noreferrer">Instagram</a>
    <h3>Thank You ❤️</h3>
    </>
  )
}
