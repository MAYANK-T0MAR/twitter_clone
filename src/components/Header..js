import React from 'react'

function Header() {
  return (
    <>
        <div className="row p-2">
            <div className="col-3 border-end">
                <h1 className='text-primary'>
                    <i class="bi bi-twitter"></i>
                </h1>
                
            </div>
            <div className="col-6  d-flex align-items-center border-bottom">
                <h4 className='fw-bolder'>Home</h4>
                <h3 className='ms-auto text-primary'><i class="bi bi-stars"></i></h3>
                
            </div>
            <div className="col-3 d-flex align-items-center border-start">
                <input type="text" placeholder='Search Twitter'
                className='w-100 rounded-4 border border-0 bg-secondary-subtle px-3 py-1'/>
            </div>
        </div>
    </>
  )
}

export default Header