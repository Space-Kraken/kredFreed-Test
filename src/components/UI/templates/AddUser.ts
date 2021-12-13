import { 
    FcViewDetails, 
    FcBusinessContact, 
    FcBullish, 
    FcConferenceCall, 
    FcApproval,
    FcHighPriority
} from "react-icons/fc";

export const AddUser = {
    bodyStyle: "flex flex-row justify-center m-3 md:m-4",
    generalStyle:"text-white font-semibold",
    selectedStyle:"bg-white rounded-lg font-bold",
    stepListStyle: "flex p-1 space-x-1 bg-gray-500 rounded-xl",
    stepStyle:"p-2",
    formComplete:FcApproval,
    fromIncomplete:FcHighPriority,
    formWizardSteps: [
        {
            title: 'General',
            icon: FcConferenceCall,
        },
        {
            title: 'Direccion y contacto',
            icon: FcBusinessContact,
        },
        {
            title: 'Informacion Finaciera',
            icon: FcBullish,
        },
        {
            title: 'Resumen',
            icon: FcViewDetails,
        },
    ]
}