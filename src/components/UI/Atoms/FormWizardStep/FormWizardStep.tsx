import React from 'react'

export default function FormWizardStep(props:any) {
    return (
        <div className={props.style}>
            {props.isActive 
                ? <div className='text-sm md:text-base'>{props.step}</div> 
                : <div className='text-xl md:text-2xl'><props.icon /></div>
            }
        </div>
    )
}

FormWizardStep.defaultProps = {
    style: 'p-2',
    step: 'Step Title',
    icon:'icon',
    isActive: false
}
