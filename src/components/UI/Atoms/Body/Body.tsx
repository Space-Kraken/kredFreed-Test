import React from 'react'

export default function Body(props: any) {
    return (
        <div className={props.style}>
            {props.children}
        </div>
    )
}

Body.defaultProps = {
    // children: null,
    style: 'min-h-screen'
}