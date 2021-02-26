import React from 'react';
import SearchBox from './SearchBox';

function Nav({handleSearchChange}) {
    return (
        <nav className= "navbar navbar-expand navbar-light bg-light"> 
            <div className= "navbar row">
                <SearchBox handleSearchChange= {handleSearchChange} />
            </div>
        </nav>
    )
}
export default Nav; 