
import React from 'react';

const ErrorAlertMsg = props => {
    return (
        <div id={props.id} class="alert alert-danger alert-dismissible fade show mt-5 font-weight-normal d-none">
            {props.text}
        </div>
    )
}
export default ErrorAlertMsg;