import React from 'react'
import './styles/Background.css'
import BackgroundImg from '../images/background.jpg'
import LandingPage from './LandingPage'

export default function Background() {
    
  return (
    <>
    <img className="backgroundImg" src={BackgroundImg} alt="background" />
    <LandingPage/>
    </>
  )
}
