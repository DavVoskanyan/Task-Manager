import React from 'react';
import classes from './Task.module.css';

const Task = (props) => {
    function removeTask() {
        props.remove(props.id)
    }
    function changeState() {
        props.change(props.id)
    }
    function dragOverHandler(e) {
            console.log(e.target)
    }
    return(
        <div className={classes.task} draggable onDragEnter={dragOverHandler}>
            {/* Add new component, that will appere, when I start drag task. There will be 6 divisions in that component, 
            and task will be able to be put in every of them, or they will be able to change there position.*/}

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