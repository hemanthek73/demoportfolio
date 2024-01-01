import React from 'react'
import me from './Assets/me1.png'
import './Home.css'
import linkedin from './Assets/linkedin.png'
import facebook from './Assets/face.png'
import insta from './Assets/insta.png'
import github from './Assets/git.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class='main'>
    <div class='right'>
      <img src='./Assets/me1.png' alt="Me" id='profile-pic' />
    </div>
    <div class='left'>
      <h2>Hi there! I </h2>
      <h1>Am Hemanth.</h1>
      <p>I am a front end developer with experience in building web applications using HTML,CSS, JAVASCRIPT and REACT. Currently</p>
      <ul class='social'>
      <li><a href="/" className="circle-icon" target='_blank'><img src='./Assets/linkedin.png' alt='linkedin'></img></a></li>
      <li><a href="/https://www.facebook.com/hemanthgowda.hemanthgowda.9?mibextid=ZbWKwL" class="circle-icon" target='_blank'><img src='./Assets/face.png' alt='facebook'></img></a></li>
      <li><a href="/" class="circle-icon" target='_blank'><img src='./Assets/insta.png' alt='insta'></img></a></li>
      <li><a href="/" class="circle-icon" target='_blank'><img src='./Assets/git.png' alt='git'></img></a></li>
    </ul>
    </div>
  

    </div>
    
    
  )
}

export default Home
