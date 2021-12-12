import React from 'react'

export default function Paragraph(props: any) {
    return (
        <p className={props.style}>
            {props.text}
        </p>
    )
}
