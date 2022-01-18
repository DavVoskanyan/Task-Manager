import React from 'react';
import classes from './Task.module.css';

const Task = (props) => {
    function removeTask() {
        props.remove(props.id)
    }
    function changeState() {
        props.change(props.id)
    }
    return(
        <div className={classes.task}>

            {(props.priority === 0) ? <div className={classes.critical}/> : (
                (props.priority === 1) ? <div className={classes.high}/> : <div className={classes.low}/>)}

            <div className={classes.infoContainer}>
                <h2 className={classes.title}>{props.title}</h2>
                <p className={classes.description}>{props.description}</p>
            </div>
            <h2 className={classes.state} onClick={changeState}>{props.state === 0 ? "open" : props.state === 1 ? "in progress" : "closed"}</h2>
            <div className={classes.remove} onClick={removeTask}>✖</div>
        </div>
    )
}

export default Task;