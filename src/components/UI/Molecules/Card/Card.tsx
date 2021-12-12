import React from 'react'
import { Atoms } from "./.../../../../Atoms";

export default function Card(props: any) {
    return (
        <div className={props.style}>
            <Atoms.Title style={props.cardTitleStyle} text={props.cardTitle}/>
            <Atoms.Paragraph style={props.cardTextStyle} text={props.cardText} />
            {props.interactive?(
                props.children
            ):null}
        </div>
    )
}

Card.defaultProps = {
    style: '',
    cardTitle: "Card Title",
    cardTitleStyle: "",
    cardText: "Card Text",
    cardTextStyle: "",
    interactive: false,
}