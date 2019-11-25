
import React from 'react';

const InputText = props => {
    return (
        <div className="form-group">
            <input 
                value={props.value}
                id={props.idname}
                onChange={props.onChange}
                className={"form-control input_element"}  
                name={props.name} 
                type={props.inputtype} 
                required={props.required}
                {...props}
            />
            { props.title ? <label className="ml-2 labelholder">{props.title}</label> : <label className="ml-2 d-none"></label> }
            
        </div>
    )
}
export default InputText;