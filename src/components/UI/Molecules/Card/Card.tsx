import React from 'react'

export default function Card(props: any) {
    return (
        <div className={props.style}>
            {props.children}
        </div>
    )
}
