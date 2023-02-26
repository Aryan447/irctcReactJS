import React from 'react'
import './styles/SearchBg.css'
import flipIcon from '../images/flipIcon.svg'
import SearchBtn from './SearchBtn'

export default function SearchBg() {
  return (
    <>
    <div className="formHomepage">
      <SearchBtn/>
      <img href="/" src={flipIcon} className="flipIcon" />
    </div>
    </>
  )
}
