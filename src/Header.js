import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({home,handleClick,handleClick2}) => {
  return (
    <div id='header'>
      <Link to={"/"}>
      <h2 onClick={home}>#NewsLive</h2>
      </Link>
      <ul>
        
        <li><Link to={"/"}><button onClick={handleClick}>Latest News</button></Link></li>
        <li><Link to={"/"}><button onClick={handleClick2}>#Trending</button></Link></li>
      </ul>
    </div>
      
  )
}

export default Header