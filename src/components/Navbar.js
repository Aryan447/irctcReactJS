import React from 'react'
import './styles/Navbar.css'
import IRCTCLogo from '../images/IRCTC-Logo.png'

export default function Navbar(props) {
  return (
    <>
    <div className="navbar">
        <img className="irctcLogo" src={IRCTCLogo} alt="IRCTC Logo" href='/'/>
      <div className='navbarText'>
        <a className='loginText' href={props.Link1}>{props.Text1}</a>
        <a className='aboutText' href={props.Link2}>{props.Text2}</a>
        <a className='contactText' href={props.Link3}>{props.Text3}</a>
      </div>
    </div>

    <div className="dropdown">
      <button className='dropdownBtn'></button>
      <div className='menu1'></div>
      <div className='menu2'></div>
      <div className='menu3'></div>
      <div className="dropdown-options">
        <a href={props.Link1}>{props.Text1} </a>
        <a href={props.Link2}>{props.Text2} </a>
        <a href={props.Link3}>{props.Text3} </a>
      </div>
    </div>

    </>
  )
}
