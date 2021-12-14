export const Financial = {
    style:"m-4",
    titleStyle:"font-bold text-xl m-2 text-center",
    title: "Information financiera",
    sections: [{
        title: "Cuenta bancaria",
        fields: [{
            id: "comBankAccount",
            inputTitle:"Numero de cuenta",
            type:"text",
            validateType:"backaccount",
            placeholder: "Ej. 123456789",
        },{
            id: "comBankName",
            inputTitle:"Banco",
            type:"text",
            placeholder: "Ej. Banco de México",
        },]
    },{
        title: "Representante legal",
        fields: [{
            id: "LRName",
            type:"text",
            inputTitle:"Nombre",
            placeholder: "Ej. Juan Perez",
        },{
            id: "LRGender",
            type:"text",
            inputTitle:"Genero",
            inputType: "select",
            options:[{
                id: "1",
                label: "Mujer",
                value: "M",
            },{
                id: "2",
                label: "Hombre",
                value: "H",
            },],
        },{
            id: "LRbirthDate",
            type:"date",
            inputTitle:"Fecha de nacimiento",
        },{
            id: "LRbirthPlace",
            type:"text",
            inputTitle:"Pais de nacimiento",
            placeholder: "Ej. Mexico",
        },{
            id: "LRbirthState",
            type:"text",
            inputTitle:"Entidad federativa de nacimiento",
            placeholder: "Ej. Guanajuato",
        },{
            id: "LRNationality",
            type:"text",
            inputTitle:"Nacionalidad",
            placeholder: "Ej. Mexicana",
        },{
            id: "LRCurp",
            type:"text",
            inputTitle:"CURP",
            validateType: "curp",
            placeholder: "Ej. CURP970905HGTNRR08",
        },{
            id: "LRRfc",
            type:"text",
            inputTitle:"RFC",
            validateType:"rfc",
            placeholder: "Ej. RFC123456XXX",
        },{
            id: "LRCivilStatus",
            type:"text",
            inputTitle:"Estado civil",
            inputType: "select",
            options:[{
                id: "1",
                label: "Soltero",
                value: "Soltero",
            },{
                id: "2",
                label: "Casado",
                value: "Casado",
            },{
                id: "3",
                label: "Divorciado",
                value: "Divorciado",
            },{
                id: "4",
                label: "Viudo",
                value: "Viudo",
            },]
        },]
    },{
        fields: [{
            id: "LRIdProof",
            type:"file",
            validateType:"file",
            inputTitle:"Documento de identificación",
        }]
    },],
    actions:[{
        id: "nextPage",
        type: "button",
        value: "Siguiente", 
    }]
}

export default Financial;