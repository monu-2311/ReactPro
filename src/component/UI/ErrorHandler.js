import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorHandler.module.css";

const ErrorHandler=props=>{
    return(
        <div>
            <div className={classes.backdrop} onclick={props.click}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.text}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
              <Button onclick={props.click}>Okay</Button>
            </footer>
        </Card>
          
        </div>
    );

};

export default ErrorHandler;