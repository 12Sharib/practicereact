import React, { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);
    const increase = () =>{
       setCount(parseInt(count) + 1);
    }
    const decrease = () =>{
        setCount(parseInt(count) - 1);
    }
  return (
    <div className="container col-6 justify-content-center p-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{count}</h5>
          <p className="card-text">
            Increase or decrease the counter?
          </p>
          <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={increase}>Increase</button>
          <button className="btn btn-dark" onClick={decrease}>Decrease</button>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Counter;
