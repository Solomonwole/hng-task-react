import React from 'react'
import './Link.css'
import { Link } from "react-router-dom";

function Links () {
  return (
    <>
    <a href='https://twitter.com/tposhofficial' target='_blank>'>
      <button id='twitter'>Twitter</button>
    </a>
    <a href='https://training.zuri.team' target='_blank>'>
      <button id='btn__zuri'>Zuri Team</button>
    </a>
    <a href='http://books.zuri.team' target='_blank>'>
      <button id='books'>Zuri Books</button>
    </a>
    <a href='https://books.zuri.team' target='_blank>'>
      <button id='book__python'>Python Books</button>
    </a>
    <a href='https://background.zuri.team' target='_blank>'>
      <button id='pitch'>Background Check for Coders</button>
    </a>
    <a href='https://books.zuri.team/design-rules' target='_blank>'>
      <button id='book__design'>Design Books</button>
    </a>
    <Link to='/contact'>
      <button id='contact'>Contact Me</button>
    </Link>
    
   
    
    </>
  )
}

export default Links
