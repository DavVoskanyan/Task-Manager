import React, {useState} from 'react';
import FormInput from './UI/formInput/FormInput.jsx';
import FormTextarea from './UI/formTextarea/FormTextarea.jsx';
import FormSelect from './UI/formSelect/FormSelect.jsx'
import HeadBut from './UI/headerButton/HeadBut.jsx'

const NewTask = ({createTask}) => {
    const [task, setTask] = useState({title: "", description: "", state: 0, priority: 2})


    const addTask = (e) => {
        const newTask = {
            ...task,
            title: task.title.trim(),
            description: task.description.trim(),
            id: Date.now()
        }
        if(newTask.title.trim().length > 0 
        && newTask.title.trim().length <= 25 
        && newTask.description.trim().length > 0 
        && newTask.description.trim().length < 300) {
            createTask(newTask)
            setTask({...task, title: "", description: "", priority: 2})
        }
    }
    return(
        <div className="newTask">
            <h2 className="addNew">Add New Task</h2>
            <div className="inp">
             <FormInput
              placeholder="Task name"
              value={task.title}
              onChange={e => setTask({...task, title: e.target.value})}
             />
             {task.title.trim().length > 25 ? <span className='alert'>too long name</span> : <span className='notAlert'></span>}
            </div>
            <div className="inp">
             <FormTextarea
              placeholder="Description..."
              value={task.description}
              onChange={e => setTask({...task, description: e.target.value})}
             />
             {task.description.trim().length > 300 ? <span className='alert'>too long description</span> : <span className='notAlert'></span>}
            </div>
            <FormSelect
             value={task.priority}
             onChange={e => setTask({...task, priority: Number(e.target.value)})}
            />
            <HeadBut onClick={addTask}>Add</HeadBut>
        </div>
    )
}

export default NewTask;