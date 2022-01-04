import React from "react";

const DetailsList =(props)=>{
    console.log(props.name);
    console.log(props.age);
    return(
        <div>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
        </div>
    );
}
    
export default DetailsList;