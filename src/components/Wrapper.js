import React from "react"; 
// import "../styles/Wraper.css";

function Wrapper ({children}) {
  return ( 
      <div className="wrapper"> {children} </div>
  );
}

export default Wrapper;