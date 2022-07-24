import React from 'react'

const Search = () =>{
    return (
        <div className='flex justify-content-center text-center'>
            <h2 className="text-light lh-base">Find nearby Pharmacy</h2>
            <h6 className="text-light lh-base">Find great places to stay, eat, shop, or visit the city</h6>
            <form action="">
                <div className="row">
                    <div className="col-4">
                        <input type="text" className="form-control form-control-lg" placeholder='What are you looking for ..'/>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control form-control-lg" placeholder="location" />
                    </div>
                    <div className="col-3">
                        <select name="" id="" className="form-control form-control-lg">
                            <option value="" selected>categories ...</option>
                            <option value="">.....</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary btn-lg btn-danger mb-8">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search