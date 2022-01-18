import React from 'react';
import classes from './HeadBut.module.css';

const HeadBut = ({children, ...props}) => {
    return(
        <button className={classes.headBut} {...props}>
            {children}
        </button>
    )
}

export default HeadBut;