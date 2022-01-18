import React from 'react';
import classes from './FormInput.module.css';

const FormInput = (props) => {
    return(
        <input {...props} className={classes.formInp}/>
    )
}

export default FormInput;