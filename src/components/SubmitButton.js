
import React from 'react';

const SubmitButton = props => {
    return (
        <div className="form-group">
            <div className="form-group row">
                <div className="col-md-12 mt-4">
                    <div className="block-container">
                        <button 
                            id={props.id}
                            className={"btn btn-outline-info- btn-block button--secondary text-uppercase"}
                            type={props.inputtype}
                            onClick={props.action}
                            {...props}
                        >
                        {props.label}
                        { props.icon ? <i className={props.icon}></i> : null }
                        &nbsp;&nbsp;<span className="d-none spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubmitButton;

            