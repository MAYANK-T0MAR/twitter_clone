import React from 'react'

function Sidebar() {
  return (
    <>
        <div className="col-3">
            <h4 className='fw-bolder mt-4 mb-4 text-primary'> <i className="bi bi-house-door-fill me-3"></i> Home</h4>
            <h4 className='fw-bolder mb-4'> <i className="bi bi-hash me-3"></i> Explore</h4>
            <h4 className='fw-bolder mb-4'> <i className="bi bi-bell me-3"></i> Notifications</h4>
            <h4 className='fw-bolder mb-4'> <i className="bi bi-envelope me-3"></i> Messages</h4>
            <h4 className='fw-bolder mb-4'> <i className="bi bi-bookmark me-3"></i> Bookmarks</h4>
            <h4 className='fw-bolder mb-4'> <i className="bi bi-file-text me-3"></i> Lists</h4>
            <h4 className='fw-bolder mb-4'> <i className="bi bi-person me-3"></i> Profile</h4>
            <h4 className='fw-bolder mb-5'> <i className="bi bi-three-dots me-3"></i> More</h4>
            <button type="button" className="btn btn-primary p-2 w-100 rounded-5"><h5>Tweet</h5></button>
        </div>
    </>
  )
}

export default Sidebar