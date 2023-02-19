import React from "react";


const Square=(props) =>{
    return (
        <div 
        onClick={props.onClick}
        style={{border:"1px solid red",
                 height:"100px",
                 width:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:"20px",
                margin:"10px"
            }}
        className='square'>
            <h5 style={{color:"white"}}>{props.value}</h5>
        </div>
    );
} 

export default Square;