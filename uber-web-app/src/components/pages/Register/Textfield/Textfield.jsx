import { useField,ErrorMessage } from 'formik';
import React from 'react';
import './Textfield.scss';  

const Textfield = ({label,...props}) =>{
    const [field,meta] = useField(props);
    return(
        <div className="handling">
            <div className="text-field-control">
                <label htmlFor={field.name}>{label}</label>
                <input className={meta.touched && meta.error && 'is-invalid'}/>
            </div>
            <ErrorMessage component="div" className="error" name={field.name}></ErrorMessage>
        </div>
    )
}

export default Textfield;