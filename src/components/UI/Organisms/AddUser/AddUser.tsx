import React from 'react'
import { Organisms } from '..';
import { Atoms } from "./../../Atoms";
import { Molecules } from "./../../Molecules";
import { Templates } from "./../../templates";


export default function AddUser(props:any) {

    const tabs = [
        <Organisms.AddUserForms.General />,
        <Organisms.AddUserForms.AddressAndContact />,
        <Organisms.AddUserForms.Financial />,
        <Organisms.AddUserForms.AvalContact />,
        <Organisms.AddUserResume />,
    ]

    return (
        <Atoms.Body
            style={Templates.AddUser.bodyStyle}
        >
            <Atoms.Animation>
               <Molecules.FormWizard
                    formSteps={Templates.AddUser.formWizardSteps}
                    tabActiveStyle={Templates.AddUser.selectedStyle}
                    tabStyle={Templates.AddUser.generalStyle}
                    stepStyle={Templates.AddUser.stepStyle}
                    stepListStyle={Templates.AddUser.stepListStyle}
                    tabs={tabs}
               />
            </Atoms.Animation>
        </Atoms.Body>
    )
}
