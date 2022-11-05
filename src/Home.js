import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Avatar from './components/Avatar/Avatar'
import Link from './components/Links/Link'
import Social from './components/Social/Social'
import FooterSection from './components/Footer/FooterSection';

function Home() {
  return (
    <>
      
        <Navbar />
        <Avatar/>
        <Link/>
        <Social/>
       <FooterSection/>
      
    </>
  )
}

export default Home
