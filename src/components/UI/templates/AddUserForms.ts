export const AddUserForms = {
    General:{
        style:"m-4",
        titleStyle:"font-bold text-xl m-2 text-center",
        title: "Information General",
        sections: [
            {
                title: "Razon Social",
                fields: [
                    {
                        id: "businessName",
                        type:"text",
                        inputType: "select",
                        options:[
                            {
                                id: "1",
                                label: "Sociedad Anonima",
                                value: "(S.A.)",
                            },
                            {
                                id: "2",
                                label: "Sociedad Anonima Cerrada",
                                value: "(S.A.C.)",
                            },
                            {
                                id: "3",
                                label: "Sociedad Comercial de Responsabilidad Limitada",
                                value: "(S.R.L.)",
                            },
                            {
                                id: "4",
                                label: "Emprsario Individual de Responsabilidad Limitada",
                                value: "(E.I.R.L.)",
                            },
                            {
                                id: "5",
                                label: "Sociedad Anonima Abierta",
                                value: "(S.A.A.)",
                            },
                        ],
                    }
                ]
            },      
            {
                title: "Nombre Comercial",
                fields: [
                    {
                        id: "commercialName",
                        type:"text",
                        placeholder: "Ej. Coca Cola",
                    }
                ]
            },      
            {
                title: "Fecha de constitucion",
                fields: [
                    {
                        id: "constitutionDate",
                        type:"date",
                    }
                ]
            },      
            {
                title: "Industria",
                fields: [
                    {
                        id: "industry",
                        type:"text",
                        placeholder: "Ej. Industria",
                    }
                ]
            },      
 
        ],
        actions:[
            {
                id: "nextPage",
                type: "button",
                value: "Siguiente", 
            }
        ]
    },
    AddressAndContact: {
        style:"m-4",
        titleStyle:"font-bold text-xl m-2 text-center",
        title: "Information de contacto",
        sections: [
            {
                title: "Numero telefonico",
                fields: [
                    {
                        id: "companyPhone",
                        type:"phone",
                        placeholder: "Ej. 461 1234 123",
                    }
                ]
            },      
            {
                title: "Direccion de correo electronico",
                fields: [
                    {
                        id: "industry",
                        type:"email",
                        placeholder: "Ej. ejemplo@algo.com",
                    }
                ]
            },      
            {
                title: "Domicilio de la empresa",
                fields: [
                    {
                        id: "companyCountry",
                        inputTitle:"Pais",
                        type:"text",    
                        placeholder: "Ej. Mexico",
                    },
                    {
                        id: "companyState",
                        inputTitle:"Estado",
                        type:"text",
                        placeholder: "Ej. Guanajuato",
                    },
                    {
                        id: "companyCity",
                        inputTitle:"Ciudad",
                        type:"text",
                        placeholder: "Ej. Celaya",
                    },
                    {
                        id: "companyColony",
                        inputTitle:"Colonia",
                        type:"text",
                        placeholder: "Ej. Centro",
                    },
                    {
                        id: "companyStreet",
                        inputTitle:"Calle",
                        type:"text",
                        placeholder: "Ej. Lirio",
                    },
                    {
                        id: "extNumber",
                        inputTitle:"Numero exterior",
                        type:"text",
                        placeholder: "Ej. 123a",
                    },
                    {
                        id: "intNumber",
                        inputTitle:"Numero interior (opcional)",
                        type:"text",
                        placeholder: "Ej. 123b",
                    },
                    {
                        id: "CompanyPC",
                        inputTitle:"Codigo postal",
                        type:"text",
                        placeholder: "Ej. 12345",
                    },
                ]
            },      
            {
                title: "Comprobamte de domicilio",
                fields: [
                    {
                        id: "companyAddressDoc",
                        type:"file",
                    }
                ]
            },      
        ],
        actions:[
            {
                id: "nextPage",
                type: "button",
                value: "Siguiente", 
            }
        ]
    },
    Financial:{
        style:"m-4",
        titleStyle:"font-bold text-xl m-2 text-center",
        title: "Information financiera",
        sections: [
            {
                title: "Cuenta bancaria",
                fields: [
                    {
                        id: "companyBankAccount",
                        type:"number",
                        placeholder: "Ej. 123456789",
                    },
                    {
                        id: "companyBank",
                        type:"text",
                        placeholder: "Ej. Banco de México",
                    },
                ]
            },      
            {
                title: "Representante legal",
                fields: [
                    {
                        id: "LRName",
                        type:"text",
                        inputTitle:"Nombre",
                        placeholder: "Ej. Juan Perez",
                    },
                    {
                        id: "LRGender",
                        type:"text",
                        inputTitle:"Genero",
                        inputType: "select",
                        options:[
                            {
                                id: "1",
                                label: "Mujer",
                                value: "M",
                            },
                            {
                                id: "2",
                                label: "Hombre",
                                value: "H",
                            },
                        ],
                    },
                    {
                        id: "LRbirthDate",
                        type:"date",
                        inputTitle:"Fecha de nacimiento",
                    },
                    {
                        id: "LRbirthPlace",
                        type:"text",
                        inputTitle:"Pais de nacimiento",
                        placeholder: "Ej. Mexico",
                    },
                    {
                        id: "LRbirthEstate",
                        type:"text",
                        inputTitle:"Entidad federativa de nacimiento",
                        placeholder: "Ej. Guanajuato",
                    },
                    {
                        id: "LRNationality",
                        type:"text",
                        inputTitle:"Nacionalidad",
                        placeholder: "Ej. Mexicana",
                    },
                    {
                        id: "LRCurp",
                        type:"text",
                        inputTitle:"CURP",
                        placeholder: "Ej. CURP970905HGTNRR08",
                    },
                    {
                        id: "LRRFC",
                        type:"text",
                        inputTitle:"RFC",
                        placeholder: "Ej. RFC123456XXX",
                    },
                    {
                        id: "LRCivilStatus",
                        type:"text",
                        inputTitle:"Estado civil",
                        inputType: "select",
                        options:[
                            {
                                id: "1",
                                label: "Soltero",
                                value: "Soltero",
                            },
                            {
                                id: "2",
                                label: "Casado",
                                value: "Casado",
                            },
                            {
                                id: "3",
                                label: "Divorciado",
                                value: "Divorciado",
                            },
                            {
                                id: "4",
                                label: "Viudo",
                                value: "Viudo",
                            },
                        ]
                    },
                    {
                        id: "LREmail",
                        type:"text",
                        inputTitle:"Correo electronico",
                        placeholder: "Ej. ejemplo@algo.com",
                    },
                    {
                        id: "LRPhone",
                        type:"text",
                        inputTitle:"Numero telefonico",
                        placeholder: "Ej. 461 1234 123",
                    },
                    {
                        id: "LRIdDoc",
                        type:"file",
                        inputTitle:"Numero telefonico",
                        placeholder: "Ej. 461 1234 123",
                    },
                ]
            },      
        ],
        actions:[
            {
                id: "nextPage",
                type: "button",
                value: "Siguiente", 
            }
        ]
    },
    Resume:{
        title: "Resume",
    }   
}