import React from 'react'

function AllTweets({ tweets }) {
  return (
    <>
      {tweets.map((elem, index) => {
        return (
          <div className="row border-bottom mt-2" key={index}>
            <div className="col-1 fs-1 p-3 pt-0 d-flex justify-content-start">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="col-11 ps-4">
              <div className="row fw-bold d-flex">
                {elem.username}
                <span className='ps-1 w-auto text-secondary fw-normal'>{elem.userhandle} ∙ {elem.datetime}</span>
                <i className="bi bi-three-dots w-auto ms-auto"></i>
              </div>
              <div className="row">{elem.tweet}</div>
              <div className="row mt-2 mb-2">
                <div className="col fs-5 text-secondary"><i className="bi bi-chat"></i> <span className='ms-2'>{elem.comments}</span> </div>
                <div className="col fs-5 text-secondary"><i className="bi bi-repeat"></i> <span className='ms-2'>{elem.retweets}</span> </div>
                <div className="col fs-5 text-secondary"><i className="bi bi-heart"></i> <span className='ms-2'>{elem.likes}</span> </div>
                <div className="col fs-5 text-secondary"><i className="bi bi-upload"></i></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default AllTweets;
