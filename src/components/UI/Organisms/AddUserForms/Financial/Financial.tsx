import React from 'react'
import { Molecules } from '../../../Molecules'
import { Templates } from '../../../templates'

export default function Financial(props: any) {

    const templateData = Templates.AddUserForms.Financial

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
