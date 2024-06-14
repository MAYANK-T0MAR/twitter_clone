import React, { useState } from 'react'


function Explore({ searchResult }) {
  
  if(!searchResult || searchResult.length === 0){
    return null;
  }
  
  return(
    <>
      <div className="col-3">

        {searchResult.map((elem, index) => {
          return (
            <div className="row border-bottom mt-2" key={index}>
              <div className="col-2 pb-5 d-flex justify-content-start align-items-start">
                <i className="bi bi-person-circle" style={{ fontSize: 35, marginTop: -7 }}></i>
              </div>
              <div className="col-10 ps-3">
                <div className="row fw-bold d-flex">
                  {elem.username}
                  <span className='ps-1 w-auto text-secondary fw-normal'>{elem.userhandle} ∙ {elem.datetime}</span>
                </div>
                <div className="row mb-2 pe-3 w-auto">{elem.tweet}</div>
              </div>
            </div>
          );
        })}

      </div>
    </>
  )
  
  
}

export default Explore