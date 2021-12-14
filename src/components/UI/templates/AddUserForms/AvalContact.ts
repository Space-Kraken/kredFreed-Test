export const AvalContact = {
    style:"m-4",
    titleStyle:"font-bold text-xl m-2 text-center",
    title: "Contacto Aval",
    sections: [
        {
            title: "Contacto",
            fields: [
                {
                    id: "LREmail",
                    inputTitle: "Correo Electrónico",
                    validateType: "email",
                    inputType: "email",
                    placeholder: "Ej. ejempl@algo.com",
                },
                {
                    id: "LRPhone",
                    inputTitle: "Teléfono",
                    inputType: "tel",
                    validateType: "phone",
                    placeholder: "Ej. 4611234123",
                }
            ]
        },
        {
        title: "Domicilio",
        fields: [{
            id: "LRCountry",
            inputTitle:"Pais",
            type:"text",    
            placeholder: "Ej. Mexico",
        },{
            id: "LRState",
            inputTitle:"Estado",
            type:"text",
            placeholder: "Ej. Guanajuato",
        },{
            id: "LRCity",
            inputTitle:"Ciudad",
            type:"text",
            placeholder: "Ej. Celaya",
        },{
            id: "LRColony",
            inputTitle:"Colonia",
            type:"text",
            placeholder: "Ej. Centro",
        },{
            id: "LRStreet",
            inputTitle:"Calle",
            type:"text",
            placeholder: "Ej. Lirio",
        },{
            id: "LRExtNum",
            inputTitle:"Numero exterior",
            type:"text",
            placeholder: "Ej. 123a",
        },{
            id: "LRIntNum",
            inputTitle:"Numero interior (opcional)",
            type:"text",
            placeholder: "Ej. 123b o NA si no tiene",
        },{
            id: "LRZipCode",
            inputTitle:"Codigo postal",
            type:"text",
            validateType: "zipcode",
            placeholder: "Ej. 12345",
        },]
        },
    ],
    actions:[{
        id: "nextPage",
        type: "button",
        value: "Siguiente", 
    }]
}
export default AvalContact;