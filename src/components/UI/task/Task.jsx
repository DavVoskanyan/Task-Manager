import React from 'react';
import classes from './Task.module.css';

const Task = (props) => {
    function removeTask() {
        props.task.remove(props.task.id)
    }
    function changeState() {
        props.task.change(props.task.id)
    }
    const dragStartHandler = (e, task) => {}
    const dragLeaveHandler = (e) => { e.target.style.backgroundColor = "white"}
    const dropHandler = (e, task) => {}
    return(
        <div className={classes.task} draggable
            onDragStart={e => dragStartHandler(e, props.task)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDrop={e => dropHandler(e, props.task)}
        >
            {/* Add new component, that will appere, when I start drag task. There will be 6 divisions in that component, 
            and task will be able to be put in every of them, or they will be able to change there position.*/}

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