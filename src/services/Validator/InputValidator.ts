const InputValidator = {
    isValid: (input: string): boolean => {
        const value = input.trim();
        return value.length > 0;
    },
    isValidNumber: (input: string): boolean => {
        return !isNaN(Number(input));
    },
    isValidEmail: (input: string): boolean => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(input);
    },
    isValidZipCode: (input: string): boolean => {
        const zipCodeRegex = /^\d{5}$/;
        return zipCodeRegex.test(input);
    },
    isValidPhoneNumber: (input: string): boolean => {
        const phoneNumberRegex = /^\d{10}$/;
        return phoneNumberRegex.test(input);
    },
    isValidRFC: (input: string): boolean => {
        const rfcRegex = /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z|\d]{3})$/;
        return rfcRegex.test(input);
    },
    isValidCURP: (input: string): boolean => {
        const curpRegex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
        return curpRegex.test(input);
    },
    isValidDate: (input: string): boolean => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(input);
    },
    isPdf: (input: string): boolean => {
        const pdfRegex = /^.*\.pdf$/;
        return pdfRegex.test(input);
    },
    isBackAccount: (input: string): boolean => {
        const backAccountRegex = /^\d{18}$/;
        return backAccountRegex.test(input);
    }
}

export function Validate(value:string, type:string):any {
    let inputState;

    switch(type) {
        case 'email':
            inputState = {
                isValid: InputValidator.isValidEmail(value),
                message: 'El correo electrónico no es válido'
            }
        break;
        case 'text':
            inputState = {
                isValid: InputValidator.isValid(value),
                message: 'Este campo es requerido'
            }
        break;
        case 'number':
            inputState = {
                isValid: InputValidator.isValidNumber(value),
                message: 'Numero no válido'
            }
        break;
        case 'zipcode':
            inputState = {
                isValid: InputValidator.isValidZipCode(value),
                message: 'Codigo postal no válido'
            }
        break;
        case 'phone':
            inputState = {
                isValid: InputValidator.isValidPhoneNumber(value),
                message: 'Numero de telefono no válido'
            }
        break;
        case 'rfc':
            inputState = {
                isValid: InputValidator.isValidRFC(value),
                message: 'RFC no válido'
            }
        break;
        case 'file':
            inputState = {
                isValid: InputValidator.isPdf(value),
                message: 'Solo se aceptan archivos PDF'
            }
        break;
        case 'curp':
            inputState = {
                isValid: InputValidator.isValidCURP(value),
                message: 'CURP no válido'
            }
        break;
        case 'backaccount':
            inputState = {
                isValid: InputValidator.isBackAccount(value),
                message: 'Cuenta no válida'
            }
        break;
        default:
            inputState = {
                isValid: false,
                message: ''
            }
        break;
    }
    return inputState;
}