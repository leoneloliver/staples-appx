
import React from 'react';

const CheckBox = props => {
    return (
        <div className="form-group">
            <input 
                className={"styled-checkbox"}
                id={props.idname} 
                type={"checkbox"}
                id={props.idname}
                name={props.name} 
                label={props.label}
                checked={props.checked}
                {...props}
            />
            <label htmlFor={props.idname}>{props.label}</label>
        </div>
    )
}
export default CheckBox;

            