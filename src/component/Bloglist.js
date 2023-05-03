import React, { useContext } from 'react'
import { UserContext } from './context'
import {Link} from "react-router-dom"



const Bloglist = () => {
  const state=useContext(UserContext)
 
  

  return (
    <div>
       {state.text.map((item) => {
          return (
            <div className="list" key={item.id}>
            <ul> <li><Link to={`/blogpost/${item.id}`}>{item.title}</Link></li></ul>

             
            </div>
          );
        })}
    </div>
  )
}

export default Bloglist
