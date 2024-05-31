import React from 'react'

function CreatePost() {
  return (
    <>
        <div className="row border-bottom">
            <div className="col-1 fs-1 p-3 pt-0 d-flex justify-content-start">
                <i class="bi bi-person-circle"></i>
            </div>
            <div className="col-11">
                <textarea 
                type="text" 
                placeholder="What's happening?" 
                className='w-100 border-0 p-3' 
                style={{border: 'none', outline:'none'}} 
                ></textarea>
                <button type="button" className="btn btn-primary offset-10 p-2 mt-2 mb-3 rounded-5" style={{width: 70, height:45}} ><p className='fw-semibold'>Tweet</p></button>
            </div>
        </div>
    </>
  )
}

export default CreatePost