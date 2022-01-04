import React from "react";
import DetailsList from "./DetailsList";

const UserDetailsList =(props)=>{
    console.log(props.item);
    console.log(props.item);
    return(
        <ul>
            {props.item.map((details) => <DetailsList key={details.id} name={details.username} age = {details.age}/>)}
        </ul>
    );
}

export default UserDetailsList;