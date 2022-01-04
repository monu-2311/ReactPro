import React, {useState} from "react";

import classes from './AddUsers.module.css';
import Card from "../UI/Card";

const AddUser = (props)=>{
    const[enteredName,setUserName] = useState('');
    const[enteredAge,setAge] = useState('');

    const nameChangeHandler=(event)=>{
        setUserName(event.target.value);
        
    }

    const ageChangeHandler=(event)=>{
        setAge(event.target.value);
    }
    const addEventHandler =(event)=>{
        event.preventDefault();
        const userDetailsData ={
            username : enteredName,
            age: enteredAge,
            id: Math.random().toString()
        };

        props.onAddUserDetails(userDetailsData);
        setAge('');
        setUserName('');

    }
    return(
        <Card className={classes.input}>
            
        <form id='1' onSubmit={addEventHandler} >
            
                <label htmlFor="username">User Name</label> 
                <input id="username" type="text" value={enteredName} onChange={nameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler}/>
            <button type="submit">Add User</button>
        </form>
        </Card>
    );
}

export default AddUser;