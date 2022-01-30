import React from 'react';
import Task from './UI/task/Task.jsx'

const TaskList = ({arr, ...props}) => {
    return(
        <div className='taskList'>
            {arr.map(task => {
                return(
                    <Task key={task.id} task={task} change={props.change}></Task>
                )
            })}
        </div>
    )
}

export default TaskList;