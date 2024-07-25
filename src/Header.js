import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({home,handleClick,handleClick2}) => {
  return (
    <div id='header'>
      <Link to={"/"}>
      <h2 onClick={home}>#NewsLive</h2>
      </Link>
      <ul>
        <li><button onClick={handleClick}>Latest News</button></li>
        <li><button onClick={handleClick2}>#Trending</button></li>
      </ul>
    </div>
      
  )
}

export default Header