import React from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
const View = ({datas}) => {
    const params=useParams();
  return (
   <>
     <div id='Overall'>
        <div id='Title'>Title : {datas[params.id].title}</div>
        <div id='content'>
         {
            datas[params.id].description
         }
        </div>
     </div>
   </>
  )
}

export default View
