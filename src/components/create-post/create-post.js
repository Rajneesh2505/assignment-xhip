import { useState } from "react"
import "./create.css"
export const CreatePost=({createPost})=>{
    const [newPost,setNewPost]=useState({body:"",title:""})
    const addPost=(e)=>{
        setNewPost({...newPost,[e.target.id]:e.target.value})
    }
    const savePost=()=>{
        createPost(newPost)
        setNewPost({body:"",title:""})
    }
    return (
        <>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Create New Post
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog box">
    <div class="modal-content">
      <div class="modal-body">
      <div class="mb-3">
  <label for="body" class="form-label">Post Body</label>
  <input type="text" class="form-control" id="body" placeholder="write post body here" onChange={(e)=>{addPost(e)}}  value={newPost.body}/>
</div>
<div class="mb-3">
<label for="title" class="form-label">Post Title</label>
<input type="text" class="form-control" id="title" placeholder="write post title here" onChange={(e)=>{addPost(e)}} value={newPost.title}/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={savePost}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}