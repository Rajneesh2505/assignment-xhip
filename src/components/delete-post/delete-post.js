import { useState} from "react"
export const DeletePost=({idx,deletePost})=>{
    const deleteExistPost=()=>{
        deletePost(idx-1)
    }
    return (
        <>
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
 Delete
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Are you sure to delete this post??</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary " data-bs-dismiss="modal" onClick={deleteExistPost}>Confirm</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}