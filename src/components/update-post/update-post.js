import {  useState } from "react"
import "./update.css"

export const UpdatePost=({idx,postdata,updatePost})=>{
  let [post,setPost]=useState(postdata[idx])
  const newdata=(e)=>{
    setPost({...post,[e.target.id]:e.target.value})
  }
const handleUpdate=()=>{
 updatePost(post) 
}
    return (
        <>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"  data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
 Update
</button>

<div class="offcanvas " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div class="mb-3">
  <label for="body" class="form-label">Post Body</label>
  <input type="email" class="form-control" id="body" onChange={(e)=>{newdata(e)}}/>
</div>
<div class="mb-3">
  <label for="title" class="form-label">Post Title</label>
  <input type="email" class="form-control" id="title" onChange={(e)=>{newdata(e)}}/>
</div>
<div class="mb-3">
  <label for="userId" class="form-label">Post UserId</label>
  <input type="email" class="form-control" id="userId" onChange={(e)=>{newdata(e)}}/>
</div>
<div class="offcanvas-header">
<button type="button" class="btn btn-secondary" data-bs-dismiss="offcanvas">Close</button>
    <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas" onClick={handleUpdate}>Confirm</button>
  </div>
  </div>
</div>
        </>
    )
}