import React from 'react'
import { loginendpoint } from '../../spotify';

import './login.css'
function login() {
  return (
    <div className='LoginContainer'>
      
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="No picture" />
      <a href={loginendpoint} target='_blank'>LOG IN</a>
    </div>
  )
}

export default login
