import React from 'react';

const Select = props => {
    return (
        <div className="form-group">
            <select 
                className="form-control custom-select"
                id={props.name} 
                name={props.name} 
                type={props.inputtype} 
                value={props.value}
                onChange={props.action}   
                required={props.required}
                {...props}             
            >
            <option defaultValue value="" >
                {props.placeholder}
            </option>
            {props.options.map(option => {
                return (
                    <option key={option.value} value={option.value} label={option.title} selected={option.value == props.optionSelected || option.title == props.optionSelected}>
                        {option.title} {option.choose}
                    </option>
                );
            })}   
            </select>
        </div>
    )
}
export default Select;