import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header.jsx';
import NewTask from './components/NewTask.jsx';
import TaskList from './components/TaskList.jsx';
import { addElement, removeElement, changeArr } from './redux/constants';

function App() {




  const dispatch = useDispatch()

  const all = useSelector(state => state)
  const [show, setShow] = useState(sortArr(all))

  function sortArr(arr) {
    let a = []
    let b = []
    let c = []
    arr.forEach(elem => {
      if(elem.priority === 0) a.push(elem)
      else if(elem.priority === 1) b.push(elem)
      else c.push(elem)
    });

    return a.concat(b, c)
  }


  function createTask(newTask) {
    dispatch({type: addElement(), payload: newTask})
    setShow(sortArr([...all, newTask]))
  }
  function changeList(num) {
    if(num === 0) setShow(sortArr(all))
    else if(num === 1) setShow(all.filter(elem => {return elem.priority === 0}))
    else if(num === 2) setShow(all.filter(elem => {return elem.priority === 1}))
    else if(num === 3) setShow(all.filter(elem => {return elem.priority === 2}))
    else if(num === 4) setShow(sortArr(all.filter(elem => {return elem.state === 0})))
    else if(num === 5) setShow(sortArr(all.filter(elem => {return elem.state === 1})))
    else setShow(sortArr(all.filter(elem => {return elem.state === 2})))
  }
  function remove(taskId) {
    dispatch({type: removeElement(), payload: taskId})
    setShow(show.filter(elem => elem.id !== taskId))
  }

  function change(task) {
    let newArr = all
    for(let i = 0; i < all.length; i++) {
      if(newArr[i].id === task) {
        if(newArr[i].state === 2) newArr[i].state = 0
        else newArr[i].state++
      }
    }
    dispatch({type: changeArr(), payload: newArr.filter(elem => elem.title)})
  }

  return (
    <div className="App">
      <Header changeList={changeList}/>
      <div className="taskDiv">
        <NewTask createTask={createTask}/>
        {all.length === 0 ? <h1 className="noTasks">There are no any tasks...</h1> : <TaskList arr={show} remove={remove} change={change}/>}
      </div>
    </div>
  );
}

export default App;
