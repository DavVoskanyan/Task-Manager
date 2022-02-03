import React from 'react';
import HeadBut from './UI/headerButton/HeadBut.jsx'
import logo from '../assets/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { changeArr } from '../redux/constants.jsx';

const Header = ({changeList, taskId}) => {
    const disp = useDispatch()
    const selec = useSelector(state => state)
    function change(e) {
        const t =  e.target.innerHTML
        if(t === "All Tasks") changeList(0)
        else if(t === "Critical") changeList(1)
        else if(t === "High") changeList(2)
        else if(t === "Low") changeList(3)
        else if(t === "Open") changeList(4)
        else if(t === "In Progress") changeList(5)
        else changeList(6)
    }
    const dragOverFun = (e) => {
        e.preventDefault()
    }
    function fin(e) {
        let arr = []
        const group = e.target.innerHTML
        selec.forEach(elem => {
            if(elem.id === taskId) {
                if(group === "Critical") elem.priority = 0
                else if(group === "High") elem.priority = 1
                else if(group === "Low") elem.priority = 2
                else if(group === "Open") elem.state = 0
                else if(group === "In Progress") elem.state = 1
                else elem.state = 2
            }
            arr.push(elem);
        })
        disp({type: changeArr(), payload: arr})
    }
    return (
        <div className="head">
            <div className="brand">
                <img className='logo' src={logo}/>
                <h1 className='projName'>GitLab Manager</h1>
            </div>
            <div className="buttonList">
                <HeadBut onDragOver={dragOverFun} onDrop={fin} onClick={change}>All Tasks</HeadBut>
                <HeadBut onDragOver={dragOverFun} onDrop={fin} onClick={change}>Open</HeadBut>
                <HeadBut onDragOver={dragOverFun} onDrop={fin} onClick={change}>In Progress</HeadBut>
                <HeadBut onDragOver={dragOverFun} onDrop={fin} onClick={change}>Closed</HeadBut>
                <HeadBut onDragOver={dragOverFun} onDrop={fin} onClick={change}>Critical</HeadBut>
                <HeadBut onDragOver={dragOverFun} onDrop={fin} onClick={change}>High</HeadBut>
                <HeadBut onDragOver={dragOverFun} onDrop={fin} onClick={change}>Low</HeadBut>
            </div>
        </div>
    )
}

export default Header;