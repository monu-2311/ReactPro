import React, {useState} from "react";

import classes from './AddUsers.module.css';

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorHandler from "../UI/ErrorHandler";

const AddUser = (props)=>{
    const[enteredName,setUserName] = useState('');
    const[enteredAge,setAge] = useState('');
    const[isError,setError] = useState();

    const nameChangeHandler=(event)=>{
        setUserName(event.target.value);
        
    }

    const ageChangeHandler=(event)=>{
        setAge(event.target.value);
    }
    const addEventHandler =(event)=>{
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                tittle:"Invalid Input",
                msg: "Please entered the valid name and age (Non-empty value)",
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                tittle:"Invalid Input Age",
                msg: "Please entered a valid age (>0)",
            });
            return;
            
        }
        props.onAddUserDetails(enteredName, enteredAge);
        setAge('');
        setUserName('');
    }
    const errorHandler =()=>{
        setError(null);
        
    }
    return(
        <div> 
        {isError && <ErrorHandler text={isError.tittle} message={isError.msg} click={errorHandler}/>} 
        <Card className={classes.input}>      
        <form id='1' onSubmit={addEventHandler} >
                <label htmlFor="username">User Name</label> 
                <input id="username" type="text" value={enteredName} onChange={nameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler}/>
           <Button type="submit">Add User</Button>
        </form>
        </Card>
        
        
        </div>
    );
}

export default AddUser;