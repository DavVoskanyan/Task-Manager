import React from 'react';
import classes from './Task.module.css';

const Task = (props) => {
    function removeTask() {
        props.remove(props.task.id)
    }
    function changeState() {
        props.change(props.task.id)
    }
    const dragOverFun = (e) => {
        e.preventDefault()
    }
    const dropFun = (e) => {
        console.log(e.target);
    }
    
    return(
        <div draggable 
        onDragStart={e => props.getId(props.task.id)}
        onDragOver={dragOverFun}
        onDrop={dropFun}
        className={classes.task}>

            {(props.task.priority === 0) ? <div className={classes.critical}/> : (
                (props.task.priority === 1) ? <div className={classes.high}/> : <div className={classes.low}/>)}

            <div className={classes.infoContainer}>
                <h2 className={classes.title}>{props.task.title}</h2>
                <p className={classes.description}>{props.task.description}</p>
            </div>
            <h2 className={classes.state} onClick={changeState}>{props.task.state === 0 ? "open" : props.task.state === 1 ? "in progress" : "closed"}</h2>
            <div className={classes.remove} onClick={removeTask}>✖</div>
        </div>
    )
}

export default Task;