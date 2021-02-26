import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <p>Click on Name to filter employees by name (ascending or descending) <br/>
                    or use the search box to narrow your results</p>
                  
            </div>    
        )
    }
}