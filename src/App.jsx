import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profile_photo from './images/photo.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="img-wrapper">
          <img className="Main--img" src ={profile_photo} alt="my image"/>
        </div>
        <div className="text-wrapper">
          <h1>Joanne Sheppard</h1>
          <h3>Research Software Developer</h3>
          <h4>joannesheppard.website</h4>
          <div className="Main--links">
            <div className="Main--links--email">Email</div>
            <div className="Main--links--linkedin">Linkedin</div>
          </div>
            <h2>About</h2>
              <h4>I am a frontend developer with a particular interest in making 
                things simple and automating daily tasks. I try to keep up with 
                security and best practices, and am always looking for new things to learn.
              </h4>
            <h2>Interests</h2>
              <h4>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
              </h4>
        </div>
        <div>
          Socials
        </div>
      </div>
    </div>
  )
}

export default App
