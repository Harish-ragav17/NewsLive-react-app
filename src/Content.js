import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({name,loading,datas}) => {
  return (
    <>
     <h2 id='news-head'>{name}</h2>
     <div id='content-container'>
      {loading? 
      <div id='loading-box'><h2 id='loading'>Loading Data...!</h2></div>
      :
      datas.map((data,i)=>
        <Link to={`/view/${i}`}>
          <div className='News-container' key={i} >
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div> 
       </Link>
     ) 
    }
     
    </div>
    
    </>
  )
}

export default Content