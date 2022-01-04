import React from "react";
import Card from "../UI/Card";
import classes from './UserDetailsList.module.css';

const UserDetailsList =(props)=>{
    return(
        <Card className={classes.users}>
        <ul>
            {props.item.map((details) => (<li key={details.id}>{details.username} ({details.age} year old)</li>))}
        </ul>
        </Card>
    );
}

export default UserDetailsList;