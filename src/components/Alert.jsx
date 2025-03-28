import React from 'react'

export default function Alert(props) {
    return (
        props.alertMessage && <>
            <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
                {props.alertMessage.message}
                <button type="button" className="btn-close" onClick={props.removeAlert} data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}
