
import React from 'react'

export default function Button(props: any) {
    return (
        <button 
            className={props.className}
            name={props.name}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.text}</button>
    )
}

Button.defaultProps = {
    text: 'Button',
    className: 'py-2 px-4 rounded-full text-white bg-blue-500 hover:bg-blue-700',
    name: 'default btn',
    type: 'button',
    onClick: () => {},
    disabled: false
}
