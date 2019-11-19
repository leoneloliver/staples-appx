
import React from 'react';

const TextArea = props => {
    return (
        <div className="form-textarea ">
            
            <textarea 
                value={props.value}
                id={props.idname}
                onChange={props.onChange}
                className={"w-100 form-control input_element"}  
                name={props.name}
                required={props.required}
                {...props}
            />  
             { props.title ? <label className="ml-2 labelholder">{props.title}</label> : <label className="ml-2 d-none"></label> }        
        </div>
    )
}
export default TextArea;