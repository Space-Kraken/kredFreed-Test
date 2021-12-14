import { Templates } from "../templates";

export const Resume = {
    title: "Resumen",
    sections:[{
        title: "General",
    },{
        title: "Direccion y contacto",
    },{
        title: "Informacion Financiera",
    },{
        title: "Contacto Aval",
    },],
    action:{
        title: "Enviar",
        style: "mt-2 py-2 px-4 rounded-full text-white bg-blue-500 hover:bg-blue-700"
    },
    getIds: ()=>{
        let ids:any[] = [];

        const Forms = [
            Templates.AddUsersFormsData.General,
            Templates.AddUsersFormsData.AddressAndContact,
            Templates.AddUsersFormsData.Financial,
            Templates.AddUsersFormsData.AvalContact,
        ];

        Forms.forEach(form=>{
            form.sections.forEach(section=>{
                section.fields.forEach(field=>{
                    ids.push({
                        id: field.id,
                    });
                })
            })
        })
        
        return ids;
    }
}
