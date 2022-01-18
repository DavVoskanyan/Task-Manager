import React from 'react';
import Task from './UI/task/Task.jsx'

const TaskList = ({arr, ...props}) => {
    return(
        <div className='taskList'>
            {arr.map(task => {
                return(
                    <Task key={task.id} id={task.id} title={task.title} description={task.description} state={task.state} priority={task.priority} remove={props.remove} change={props.change}></Task>
                )
            })}
        </div>
    )
}

export default TaskList;