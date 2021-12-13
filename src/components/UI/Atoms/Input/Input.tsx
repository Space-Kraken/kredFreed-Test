import React from 'react'
import { Hooks } from "./../../../../Hooks";

export default function Input(props: any) {
    const [value, setValue] = Hooks.useLocalStorage(props.id, '');
    return (
        <>
            <span className='ml-2 font-thin'>{props.inputTitle}</span>
            <input 
                className={props.style}
                type={props.type}
                placeholder={props.placeholder}
                value={props.id?value:'Unique Id is required'}
                onChange={props.id?(event) => setValue(event.target.value):()=>{}}
            />
        </>
    )
}

Input.defaultProps = {
    inputTitle: '',
    style: 'bg-gray-200 appearance-none border-2 rounded m-2 py-2 px-4 mt-1 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500',
    type: 'text',
    placeholder: '',
    id: ''
}
