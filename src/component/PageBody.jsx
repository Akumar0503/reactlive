import React from "react";

function PageBody(props){
    return(
        <>
         <div className="main_div">
             <div className="column_div">
                 <img src={props.imgUrl} />
                 <h3> {props.name} </h3>
                 <p>  {props.para} </p> 
             </div>
         </div>
        </>
    )

}

export default PageBody