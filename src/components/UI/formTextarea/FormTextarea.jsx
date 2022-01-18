import React from 'react';
import classes from './FormTextarea.module.css';

const FormTextarea = (props) => {
    return(
        <textarea {...props} className={classes.formTeaxtArea}>
        </textarea>
    )
}

export default FormTextarea;