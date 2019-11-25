import React from 'react';

const SelectDate = props => {
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
            >
            <option defaultValue value="" >
                {props.placeholder}
            </option>
            {props.options.map(option => {
                return (
                    
                    <option key={option} value={option} label={option} selected={option.value == props.optionSelected || option.title == props.optionSelected}>
                        {option}
                    </option>
                );
            })}   
            </select>
        </div>
    )
}
export default SelectDate;