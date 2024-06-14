import React, { useState } from 'react'

function CreatePost({postTweets}) {
  const [post, setpost] = useState("")
  function makePost(event){
    event.preventDefault();
    postTweets(post);
    setpost("");
  }
  return (
    <>
        <div className="row border-bottom">
            <div className="col-1 fs-1 p-3 pt-0 d-flex justify-content-start">
                <i className="bi bi-person-circle"></i>
            </div>
            <div className="col-11">
                <form onSubmit={makePost}>
                  <textarea 
                  type="text" 
                  value={post}
                  onChange= {(event)=>{
                    setpost(event.target.value)
                  }}
                  placeholder="What's happening?" 
                  className='w-100 border-0 p-3' 
                  style={{border: 'none', outline:'none'}} 
                  ></textarea>
                  <button  type="submit" className="btn btn-primary offset-10 p-2 mt-2 mb-3 rounded-5" style={{width: 70, height:45}} ><p className='fw-semibold'>Tweet</p></button>
                </form>
            </div>
        </div>
    </>
  )
}

export default CreatePost