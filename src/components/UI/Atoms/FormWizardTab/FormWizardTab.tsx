import React from 'react'

export default function FormWizardTab(props:any) {
    return (
        <div className={props.style}>
            {props.children}
        </div>
    )
}

FormWizardTab.defaultProps = {
    style: 'bg-white rounded-lg mt-4 w-4/5 md:w-2/5 shadow-lg',
    children: <div>You should send a component as content prop</div>
}   
