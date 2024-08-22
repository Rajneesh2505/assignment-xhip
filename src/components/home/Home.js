import { Fragment, useEffect, useState } from "react"
import Xhipment from "../assets/xhipment-logo.png"
import "./home.css"
import { useAuth0 } from "@auth0/auth0-react";
import { CreatePost } from "../create-post/create-post"
import { DeletePost } from "../delete-post/delete-post"
import { UpdatePost } from "../update-post/update-post"
export const Home=({postdata,createPost,deletePost,updatePost})=>{
  const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0()
    return (
        <>
   
       <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container nav">
<img src={Xhipment} alt="Logo" className="d-inline-block align-text-top"/> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{isAuthenticated?<CreatePost createPost={createPost}/>:<button type="button" onClick={() =>loginWithRedirect()}  class="btn btn-primary"  data-bs-target="#exampleModal">
 Create New Post
</button>}
        <div className="container post-container">
        {postdata.map((post,idx)=>{
            return (
                <Fragment key={idx}>
               <div class="card text-bg-light mb-3 border-secondary shadow">
  <div class="card-body">
    <h4>{post.body}</h4>
  <p>{post.userId}</p>
  <p>{post.title}</p>
  <div  class="container-sm">
 {isAuthenticated?<UpdatePost idx={post.id} postdata={postdata} updatePost={updatePost}/>:<button type="button" onClick={() => loginWithRedirect()} class="btn btn-primary"  data-bs-target="#exampleModal">
 Update
</button>}
  {isAuthenticated?<DeletePost idx={post.id} deletePost={deletePost}/>:<button type="button" onClick={() => loginWithRedirect()} class="btn btn-danger" >
 Delete
</button>}
  </div>
  </div>
</div>
                </Fragment>
            )
        })}
        </div>
        </>
    )
}