import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Avatar from './components/Avatar/Avatar'
import Links from './components/Links/Link'
import Social from './components/Social/Social'
import FooterSection from './components/Footer/FooterSection';

function Home() {
  return (
    <>
      
        <Navbar />
        <Avatar/>
        <Links/>
        <Social/>
       <FooterSection/>
      
    </>
  )
}

export default Home
