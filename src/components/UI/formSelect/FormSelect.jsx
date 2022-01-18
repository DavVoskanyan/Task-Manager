import React from 'react';
import classes from './FormSelect.module.css'

const FormSelect = (props) => {
    return(
        <select {...props} className={classes.sel}>
            <option className={classes.opt} value={2}>Low Priority</option>
            <option className={classes.opt} value={1}>High Priority</option>
            <option className={classes.opt} value={0}>Critical Priority</option>
        </select>
    )
}

export default FormSelect;