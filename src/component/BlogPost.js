import React, { useContext } from 'react'
import { UserContext } from './context'
import { useParams, Link } from 'react-router-dom'

const BlogPost = () => {
  const state  = useContext(UserContext)
 const {text}=state;
  const { userid } = useParams()
  // const para= {userid}

  console.log(userid);

 
const userblog=state.text.filter((item) => {return item.id===parseInt(userid)})

console.log(text);
  return (
  
      <div>
       {userblog.map((item) => {
          return (
            <div className="list" key={userid}>
          <h1>  {item.title}</h1>
           <h3>  {item.value  }</h3> 
             
            

             
            </div>
          );
        })}
       
      </div>

  )
}

export default BlogPost 
