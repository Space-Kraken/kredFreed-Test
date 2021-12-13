export const General = {
    style:"m-4",
    titleStyle:"font-bold text-xl m-2 text-center",
    title: "Information General",
    sections: [{
        title: "Datos de la empresa",
        fields: [{
            id: "comName",
            type:"text",
            inputType: "select",
            inputTitle: "Razon social",
            options:[{
                id: "1",
                label: "Sociedad Anonima",
                value: "(S.A.)",
            },{
                id: "2",
                label: "Sociedad Anonima Cerrada",
                value: "(S.A.C.)",
            },{
                id: "3",
                label: "Sociedad Comercial de Responsabilidad Limitada",
                value: "(S.R.L.)",
            },{
                id: "4",
                label: "Emprsario Individual de Responsabilidad Limitada",
                value: "(E.I.R.L.)",
            },{
                id: "5",
                label: "Sociedad Anonima Abierta",
                value: "(S.A.A.)",
            },],
        },{
            id: "comComercialName",
            type:"text",
            inputTitle: "Nombre comercial",
            placeholder: "Ej. Coca Cola",
        },{
            id: "comNacionality",
            type:"text",
            inputTitle: "Nacionalidad",
            placeholder: "Ej. Mexicana",
        },{
            id: "comConstitutionDate",
            inputTitle: "Fecha de constitución",
            type:"date",
        },{
            id: "comRFC",
            type:"text",
            inputTitle: "RFC",
            placeholder: "Ej. RFC123456RFC",
        },{
            id: "comFiscalRegime",
            inputType:"select",
            inputTitle: "Regimen fiscal",
            options:[{
                id: "1",
                label: "Asalariado",
                value: "Asalariado",
            },{
                id: "2",
                label: "Actividades Profesionales",
                value: "Avtividades Profesionales",
            },{
                id: "3",
                label: "Arrendamiento de inmuebles", 
                value: "Arrendamiento de inmuebles",
            },{
                id: "4",
                label: "Actvidades Empresariales",
                value: "Actvidades Empresariales",
            },{
                id: "5",
                label: "Icorporación fiscal",
                value: "Incorporación fiscal",
            },{
                id: "6",
                label: "General",
                value: "General",
            },{
                id: "7",
                label: "Personas Morales sin fines de lucro",
                value: "Personas Morales sin fines de lucro",
            }]
            // placeholder: "Ej. ",
        },{
            id: "comIndustry",
            type:"text",
            inputTitle: "Industria",
            placeholder: "Ej. Industria",
        }]
    },],
    actions:[{
        id: "nextPage",
        type: "button",
        value: "Siguiente", 
    }]
}

export default General;