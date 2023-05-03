import React, { useContext } from 'react'
import { useState } from 'react';
import { UserContext } from './context';



const Form = () => {
  const state=useContext(UserContext)
const {text,settext}=state

const [newItem, setNewItem] = useState("");
  const [blog,setblog]=useState("")


  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }
 const item = {
      id: Math.floor(Math.random() * 10000),
      title: newItem,
    
    
      value:blog
    }
    settext([...text, item]);
    setNewItem("");
    setblog("");
  }
  return (
    <div className="App">
      <div className="div1">
    

        <h3 className="heading">BLOG TITLE</h3>
        <input
          type="text"
          className="input1"
          placeholder="Blog title...."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} 
           /> <br/>
           <h3>BLOG POST </h3>
        <textarea id="w3review"   placeholder="Blog contant...." value={blog} onChange={(e) => setblog(e.target.value)} name="w3review" rows="20" cols="100"></textarea> <br/>
        <button variant="secondary" onClick={addItem}>
         SUBMIT
        </button>
      
       
              
      </div>
    
    </div>
  );
}
export default Form