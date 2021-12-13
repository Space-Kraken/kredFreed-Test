import React from 'react'
import { Atoms } from "./../../Atoms";
import { Molecules } from "./../../Molecules";
import { Templates } from "./../../templates";

export default function AddUser(props:any) {

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
               />
            </Atoms.Animation>
        </Atoms.Body>
    )
}
