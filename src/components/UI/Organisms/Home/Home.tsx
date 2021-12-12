import React from 'react'
import { Atoms } from "./../../Atoms";
import { Molecules } from "./../../Molecules";
import { Templates } from "./../../templates";

export default function Home(props:any) {
    return (
        <Atoms.Body style={Templates.Home.bodyStyle} >
            <Molecules.Card style={Templates.Home.cardStyle}>
                <Atoms.Title style={Templates.Home.cardTitleStyle} text={Templates.Home.cardTitle}/>
                <Atoms.Paragraph style={Templates.Home.cardTextStyle} text={Templates.Home.cardText} />
            </Molecules.Card>            
        </Atoms.Body>
    )
}
