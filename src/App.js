import React, { useState, useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import "./App.css"

import BlogPost from './component/BlogPost';
import Form from './component/Form';
import Bloglist from './component/Bloglist';
import { UserContext } from './component/context';
import {Link} from "react-router-dom"

function App() {
  const [items, setItems] = useState([]);
  const state={
    text:items,
    settext:setItems
  }
  return (
    <div className="App">
      <h2 className='heading'><Link to="/" >Home</Link> &nbsp;
      <Link to="/bloglist" >Bloglist</Link> </h2>
    
   
     
 
     <UserContext.Provider value={state}>
        <Routes>
          {/* <Switch>  */}
          <Route path="/" element={<Form />} />
          
          <Route path="/bloglist" element={<Bloglist  />} />  
          <Route path='/blogpost/:userid' element={<BlogPost />} />
  
        
          {/* </Switch> */}
                  </Routes>
                
        </UserContext.Provider>
    
   
    </div>
  );
}

export default App; 
