import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <form>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only">Name</label>
                        <input type="text" className="form-control mb-2, justify-content-between" placeholder="Jane Doe"/>
                    </div>
                    <div className="col-auto">
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar