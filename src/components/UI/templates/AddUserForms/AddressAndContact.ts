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
            validateType:"phone",
            placeholder: "Ej. 4611234123",
        },{
            id: "comEmail",
            type:"email",
            validateType:"email",
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
            validateType:"zipcode",
            placeholder: "Ej. 12345",
        },]
    },{
        title: "Comprobamte de domicilio",
        fields: [{
            id: "comAddressProof",
            validateType:"file",
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