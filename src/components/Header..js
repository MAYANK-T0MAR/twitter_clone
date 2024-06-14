import Fuse from "fuse.js"


function Header({ searchedItem, setsearchedItem, tweets, setsearchResult }) {

    const fuse = new Fuse(tweets, {
        keys: ['username', 'userhandle', 'tweet']
      });
      

  return (
    <>
        <div className="row p-2">
            <div className="col-3 border-end">
                <h1 className='text-primary'>
                    <i className="bi bi-twitter"></i>
                </h1>
                
            </div>
            <div className="col-6  d-flex align-items-center border-bottom">
                <h4 className='fw-bolder'>Home</h4>
                <h3 className='ms-auto text-primary'><i className="bi bi-stars"></i></h3>
                
            </div>
            <div className="col-3 d-flex align-items-center border-start">
                <input type="text"
                value={searchedItem}
                onChange={(e)=>{
                    setsearchedItem(e.target.value);
                    if(searchedItem ===""){
                        setsearchResult([]);
                    }
                    else{
                        let result = fuse.search(searchedItem);
                        setsearchResult(result.map(r=>r.item));
                    }
                    
                }}
                 placeholder='Search Twitter'
                 style={{border: 'none', outline:'none'}} 
                className='w-100 rounded-4 border border-0 bg-secondary-subtle px-3 py-1'/>
            </div>
        </div>
    </>
  )
}

export default Header