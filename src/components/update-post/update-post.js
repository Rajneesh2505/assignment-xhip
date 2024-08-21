import { useState } from "react"

export const UpdatePost=({data,postdata,updatePost})=>{
const handleUpdate=(e)=>{
  e.preventDefault()
  console.log(postdata[data-1])
}
    return (
        <>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Update
</button>
<div class="modal-dialog modal-dialog-centered">
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
      <div class="mb-3">
  <label for="body" class="form-label">Post Body</label>
  <input type="text" class="form-control" id="body" onChange={(e)=>{console.log(e)}}/>
</div>
<div class="mb-3">
<label for="title" class="form-label">Post Title</label>
<input type="text" class="form-control" id="title" />
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"   onClick={handleUpdate}>Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>



        </>
    )
}