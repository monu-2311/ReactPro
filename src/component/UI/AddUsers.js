import React from "react";
import '../CSS/AddUser.css';

const AddUser = ()=>{
    const addEventHandler =(event)=>{
        event.preventDefault();
    }
    return(
        <form onSubmit={addEventHandler}>
            <div className="lable">
                <label htmlFor="username">User Name</label>
                <input id="username" type="text"/>
            </div>
            <div className="lable">
                <label htmlFor="age">Age</label>
                <input id="age" type="text"/>
            </div>
        </form>
    );
}

export default AddUser;