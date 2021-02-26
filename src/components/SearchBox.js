import React from 'react';
import '../styles/SearchBox.css';


function SearchBox({handleSearchChange}) {
    return (
        <div className= "searchBox">
         <form>
             <input className="mr-4"
                type="search"
                placeholder="search"
                aria-label="search"
                onChange={e => handleSearchChange(e)}
             >
             </input>
         </form>
        </div>
    )
}
export default SearchBox;
