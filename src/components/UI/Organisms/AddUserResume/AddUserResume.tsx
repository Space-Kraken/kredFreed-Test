import React from 'react'
import { Services } from '../../../../services';
import { Atoms } from '../../Atoms';
import { Templates } from '../../templates';
import { Molecules } from "./../../Molecules";
import { Organisms } from "./../../Organisms";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";


export default function AddUserResume(props:any) {
    const { addToast } = useToasts();
    const navigate = useNavigate();
    const ids = Templates.Resume.getIds();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const formIsValid = Services.FormValidator.validate(ids);
        if (formIsValid) {
            addToast("Formulario enviado", { 
                appearance: 'success', 
                autoDismiss: true 
            });
            localStorage.clear();
            navigate("/");
        }else{
            addToast("Llene todos los campos antes de enviar ", {
                appearance: 'error',
                autoDismiss: true
            });
        }
    }

    const tabs=[
        <Organisms.AddUserResumes.General data={ids.slice(0,7)}/>,
        <Organisms.AddUserResumes.AddressAndContact data={ids.slice(7,18)}/>,
        <Organisms.AddUserResumes.Financial data={ids.slice(18,30)} />,
        <Organisms.AddUserResumes.AvalContact data={ids.slice(30,40)} />,
    ]

    const action = 
        <Atoms.Button 
            text={Templates.Resume.action.title}
            style={Templates.Resume.action.style}
            action={handleSubmit}
        />

    return (
        <Molecules.DropdownTabs 
            content={tabs}
            sections={Templates.Resume.sections}
            action={action}
        />
    )
}
