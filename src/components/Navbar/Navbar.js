import React, {useState} from 'react'
import share from '../share.svg'
import desktop_share from '../desktop_share.svg'
import './Navbar.css'
// import React from 'react'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-share' onClick={handleClick}>
        <img src={click ? share : desktop_share}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
