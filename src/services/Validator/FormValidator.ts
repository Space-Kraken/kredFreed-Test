export const FormValidator = {
    validate: (fields: string[]) => {
        let isValid = true; 
        fields.forEach((field:any) => {
            let inputData: string = localStorage!.getItem(field.id)! || '';
            if(isValid){
                if (inputData === "null" || inputData === "") {
                    isValid = false;
                }
            }
        });
        return isValid;
    }
}
