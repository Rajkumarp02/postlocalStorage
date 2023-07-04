import React, { useEffect, useState } from 'react'
//import Post from './components/Post';
import './App.css';


//getting data from localstorage
const getData = () => {
  const data = localStorage.getItem('post')
  if (data !== "") {
    return JSON.parse(data)

  } else {
    return []
  }
}
console.log(getData())

export default function App() {
  const [inputs, setInputs] = useState(" ");
  //const [err, setErr] = useState(-1);
  
  const [post, setPost] = useState(getData()); ///we put get data from localstorage and add to initial array.


  const handleDeleteOne = (index) => {
    post.splice(index, 1)
    setPost([...post])                          //only one delete.!!
    console.log(index)
    //localStorage.removeItem('post')
  }


 



  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);  
  if(inputs.trim() === ''){
    return alert('Check value')           //if you not given the value it will be helping us
  }
                 
    setPost([...post, inputs]);            //push inputs to the array..!!
    setInputs('');
  };
  console.log(post);

  useEffect(() => {
  const count = post.length;         //array count
  
     localStorage.setItem('postCount', JSON.stringify(`post${count}`));
     localStorage.setItem('post1', JSON.stringify(post));
    }, [post])                       //we set data to localstorage               
                                                        
    const handleReset = () => {
      setInputs("")
    }


            //array count
   const count = post.length; 


  return (

    
    <div class="container">
    
      <h1>Post And Show</h1>
      <button  class="DeleteAll" onClick={() => setPost([])}>DeleteAll</button>
      <br />
      
      <input type='text' value={inputs} onChange={(e) => setInputs(e.target.value)}  placeholder="Type Something..." required/>
      
      <div class="post">
      <button type='submit' onClick={() => handleReset()}>reset</button>
     <button type='submit' onClick={(e) => handleSubmit(e)}>Post</button>
    
     </div>
  

        
            <h1 class ="view" >View All</h1>
             <h4>count:{count}</h4>
             
       
      
          {post && post.map((post, i) =>
           
           <>
            <h5 key={post.id}>post{count}</h5>
              <h5>{post}</h5>
              <button class="DeleteOne"onClick={() => handleDeleteOne(i)}>DeleteOne</button> 
            </>
        
              
          
        )}
          {post.length < 1 && <div>no data </div>}
       
        


    </div>
   


  )
}
