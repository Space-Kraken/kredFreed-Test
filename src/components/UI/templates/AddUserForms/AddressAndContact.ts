export const AddressAndContact = {
    style:"m-4",
    titleStyle:"font-bold text-xl m-2 text-center",
    title: "Information de contacto",
    sections: [{
        title: "Contacto",
        fields: [{
            id: "comPhone",
            type:"phone",
            inputTitle:"Teléfono de la empresa",
            placeholder: "Ej. 461 1234 123",
        },{
            id: "comEmail",
            type:"email",
            inputTitle:"Correo electrónico",
            placeholder: "Ej. ejemplo@algo.com",
        }]
    },{
        title: "Domicilio de la empresa",
        fields: [{
            id: "comCountry",
            inputTitle:"Pais",
            type:"text",    
            placeholder: "Ej. Mexico",
        },{
            id: "comState",
            inputTitle:"Estado",
            type:"text",
            placeholder: "Ej. Guanajuato",
        },{
            id: "comCity",
            inputTitle:"Ciudad",
            type:"text",
            placeholder: "Ej. Celaya",
        },{
            id: "comColony",
            inputTitle:"Colonia",
            type:"text",
            placeholder: "Ej. Centro",
        },{
            id: "comStreet",
            inputTitle:"Calle",
            type:"text",
            placeholder: "Ej. Lirio",
        },{
            id: "comExtNum",
            inputTitle:"Numero exterior",
            type:"text",
            placeholder: "Ej. 123a",
        },{
            id: "comIntNum",
            inputTitle:"Numero interior (opcional)",
            type:"text",
            placeholder: "Ej. 123b",
        },{
            id: "comZipCode",
            inputTitle:"Codigo postal",
            type:"text",
            placeholder: "Ej. 12345",
        },]
    },{
        title: "Comprobamte de domicilio",
        fields: [{
            id: "comAddressProof",
            type:"file",
        }]
    },],
    actions:[{
        id: "nextPage",
        type: "button",
        value: "Siguiente", 
    }]
}

export default AddressAndContact;