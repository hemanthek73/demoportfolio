import React from 'react'
import './Navbar.css'
import menu from './Assets/menu.png'
import close from './Assets/close.png'


function showSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hideSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='none'
}
const Navbar = () => {
  return (
   <div className='navigation'>

    <nav>
    <ul className='sidebar'>
    <li onClick={hideSidebar}><a href="/"><img src={close} alt='close'></img></a></li>
      <li><a href="/">skills</a></li>
      <li><a href="/">projects</a></li>
      <li><a href="/">certificates</a></li>
      <li ><a href="/">about</a></li>
    </ul>
    <ul >
    <li><a href="/">portfolio</a></li>
      <li className='hideOnMobile'><a href="/">skills</a></li>
      <li className='hideOnMobile'><a href="/">projects</a></li>
      <li className='hideOnMobile'><a href="/">certificates</a></li>
      <li className='hideOnMobile'><a href="/">about</a></li>
      <li className='menuButton' onClick={showSidebar}><a href="/"><img src={menu} alt='menu' ></img></a></li>
    </ul>
    </nav>
   </div>
 

    
  )
}

export default Navbar
