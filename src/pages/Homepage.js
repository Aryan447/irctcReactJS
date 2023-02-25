import React from 'react'
import Background from '../components/Background'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import SearchBg from '../components/SearchBg'

export default function Homepage() {
  return (
    <>
    <LandingPage/>
    <Background/>
    <SearchBg/>
    <Navbar Link1={'/login'} Text1={'Login'} Link2={'/about'} Text2={'About'} Link3={'/contact'} Text3={'Contact'}/>
    </>
  )
}
