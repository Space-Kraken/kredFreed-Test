import React from 'react'
import { Atoms } from "./../../Atoms";
import { Molecules } from "./../../Molecules";
import { Templates } from "./../../templates";

export default function Home(props:any) {
    return (
        <Atoms.Body style={Templates.Home.bodyStyle} >
            {/* Default Animation Atom provide a fadein animation */}
            <Atoms.Animation>
                <Molecules.Card 
                    style={Templates.Home.cardStyle}
                    cardTitleStyle={Templates.Home.cardTitleStyle}
                    cardTitle={Templates.Home.cardTitle}
                    cardTextStyle={Templates.Home.cardTextStyle}
                    cardText={Templates.Home.cardText}
                    interactive={Templates.Home.cardInteractive}
                >
                    <div className={Templates.Home.actionInteractiveStyle}>
                        {Templates.Home.cardInteractiveButtons.map(
                            (button:any, index:number) => (
                                <Atoms.Button
                                    key={index} 
                                    style={button.style}
                                    text={button.cardButtonText}
                                    action={props.cardButtonAction}
                                />
                            )
                        )}
                    </div>
                </Molecules.Card>
            </Atoms.Animation>
        </Atoms.Body>   
    )
}
