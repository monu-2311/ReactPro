import React,{Fragment} from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorHandler.module.css";

const ErrorHandler=props=>{
    return(
        <Fragment>
            <div className={classes.backdrop} onClick={props.click}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.text}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
              <Button onClick={props.click}>Okay</Button>
            </footer>
        </Card>
          
        </Fragment>
    );

};

export default ErrorHandler;