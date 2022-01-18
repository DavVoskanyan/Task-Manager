import React from 'react';
import HeadBut from './UI/headerButton/HeadBut.jsx'
import logo from '../assets/logo.svg'

const Header = ({changeList}) => {
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

    return (
        <div className="head">
            <div className="brand">
                <img className='logo' src={logo}/>
                <h1 className='projName'>GitLab Manager</h1>
            </div>
            <div className="buttonList">
                <HeadBut onClick={change}>All Tasks</HeadBut>
                <HeadBut onClick={change}>Open</HeadBut>
                <HeadBut onClick={change}>In Progress</HeadBut>
                <HeadBut onClick={change}>Closed</HeadBut>
                <HeadBut onClick={change}>Critical</HeadBut>
                <HeadBut onClick={change}>High</HeadBut>
                <HeadBut onClick={change}>Low</HeadBut>
            </div>
        </div>
    )
}

export default Header;