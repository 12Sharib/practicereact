import React, { useState } from "react";

function Temperature() {
    const [degree,setDegree] = useState(0);
    const [color,setColor] = useState("primary");
    const increase =()=>{
        const x = degree+1;
        if(x >=15){
          setColor("success") 
        }
        if(x>=20){
          setColor("secondary")
        }
        setDegree(x)
        
    }
    const decrease = () =>{
      const newDec = degree-1;
      if(newDec <= 15){
        setColor("primary");
      }
      if(newDec <=20){
        setColor("primary");
      }
      setDegree(newDec)
    }
  return (
    <div className="container d-flex justify-content-center col-4">
      <div className="border p-3 border-4 rounded m-2" style={{ width: "20rem" }}>
          <h5 className="card-title text-center p-2">Temperature</h5>
          <p className={`border border-4 rounded-circle text-center fs-1 bg-${color}`} style={{width:"10rem",height:"10rem"}}>
           {degree}
          </p>
          <div className="d-flex justify-content-between p-2">
            <button className="btn btn-dark" onClick={increase}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </button>
            <button className="btn btn-dark" onClick={decrease}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
   
  );
}

export default Temperature;
