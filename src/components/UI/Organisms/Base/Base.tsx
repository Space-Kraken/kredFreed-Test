import React from 'react'
import { Templates } from "./../../templates";
import { Molecules } from "./../../Molecules";
import { Atoms } from "./../../Atoms"; 

export default function Base(props: any) {

    return (
        <Atoms.Body style={Templates.Base.bodyStyle}>
            <Molecules.Navbar 
                style={Templates.Base.navbarStyle} 
                navLinks={Templates.Base.navbarRoutes} 
                linkStyle={Templates.Base.linkStyle}
                userLinks={Templates.Base.userLinks}
            />
            {props.children}
        </Atoms.Body>
    )
}
