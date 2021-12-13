import React from 'react'
import { Molecules } from "./../../../Molecules";
import { Templates } from "./../../../templates";

export default function General(props:any) {

    const templateData = Templates.AddUserForms.General

    return (
        <Molecules.Form
            style={templateData.style}
            title={templateData.title}
            titleStyle={templateData.titleStyle}
            sections={templateData.sections}
            actions={templateData.actions}
            action={props.action}
        />
    )
}
