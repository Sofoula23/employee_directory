import React from 'react';
import '../styles/SearchBox.css';


function SearchBox({handleSearchChange}) {
    return (
        <div className= "searchBox">
         <form>
             <input className="mr-4"
                type="search"
                placeholder="Search by Name"
                aria-label="search"
                onChange={e => handleSearchChange(e)}
             >
                 
             </input>
             <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
         </form>
        </div>
    )
}
export default SearchBox;
