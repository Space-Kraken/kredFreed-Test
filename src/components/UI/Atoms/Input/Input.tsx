import React,{useState} from 'react'
import { Hooks } from "./../../../../Hooks";
import { Services } from "./../../../../services";
export default function Input(props: any) {
    const [file, setFile] = useState('');
    const [error, setError] = useState({
        isValid: false,
        message: ''
    });
    const [value, setValue] = Hooks.useLocalStorage(props.id, props.value);

    const handleChange = (e: any) => {
        const {isValid, message} = Services.Validate(e.target.value, props.validateType);
        setError({
            isValid: !isValid,
            message: message
        });
        if(isValid){
            setFile(e.target.value);
            setValue(e.target.value)
        }
    }

    const handleValue = () =>{
        if(props.type === 'file'){
            return file;
        }
        return value;
    }

    return (
        <>
            <span className='ml-2 font-light'>{props.inputTitle}</span>
            <input 
                className={`${props.style} ${error.isValid? 'border-red-500': 'boder-gray-500 focus:border-purple-500'}`}
                type={props.type}
                placeholder={props.placeholder}
                value={props.id
                    ?handleValue():'Unique Id is required'}
                onChange={
                    props.id
                        ?(event) => handleChange(event)
                        :()=>{}}
                disabled={props.disabled}
            />
            <span className={`${error.isValid?"flex flex-row":"hidden"} justify-end font-thin mx-2 text-red-400`}>{error.message}</span>
        </>
    )
}

Input.defaultProps = {
    id: '', 
    style: 'bg-gray-200 appearance-none border-2 rounded m-2 py-2 px-4 mt-1 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white',
    inputTitle: '',
    type: 'text',
    value: null,
    placeholder: '',
    validateType: 'text',
    disabled: false
}
