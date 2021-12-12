import React from 'react'

export default function IconButton(props:any) {
    return (
        <button
            className={props.style}
            type={props.type}
            onClick={props.onClick}
            aria-controls={props.ariaControls}
            aria-expanded={props.ariaLabel}
        >
            {props.children}
        </button>
    )
}

IconButton.defaultProps = {
    style: '',
    type: 'button',
    onClick: () => {},
    ariaControls: '',
    ariaLabel: '',
}