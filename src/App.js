import { Home } from "./components/home/Home";
import { useEffect, useState } from "react"
import {Entry} from "./components/entry/entry"

function App() {
  const [postdata,setPostData]=useState([])
  useEffect(()=>{
    setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPostData(json));
    },2000)
  },[])
  const createPost=(e)=>{
    setPostData([...postdata,{body:e.body,title:e.title,userId:(postdata[postdata.length-1].userId)+1,id:(postdata[postdata.length-1].id)+1}])
  }

  const deletePost=(e)=>{
postdata.splice(e,1)
setPostData([...postdata])
  }
  const updatePost=(e)=>{
    console.log("post is",e)
    let newItem=postdata.splice(e.id,1,e)
setPostData([...postdata])
  }
  return (
   <>
{postdata.length?<Home postdata={postdata} createPost={createPost} deletePost={deletePost} updatePost={updatePost}/>:<Entry/>}
   </>
  );
}

export default App;
