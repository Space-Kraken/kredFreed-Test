import React from 'react'
import { Listbox, Transition } from "@headlessui/react";
import { Hooks } from "./../../../../Hooks";
import { GoFoldDown } from "react-icons/go";

export default function Select(props:any) {
    const [value, setValue] = Hooks.useLocalStorage(props.id, props.options[0]);

    return (
        <Listbox
            value={value}
            onChange={(value)=>{
                setValue(value)
            }}        
        >
            <span className='font-thin ml-2'>{props.inputTitle}</span>
            <Listbox.Button>
                <div className={props.style}>
                    <span className='block truncate'>{value.label}</span>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <GoFoldDown />
                    </span>
                </div>
            </Listbox.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Listbox.Options className="absolute w-3/12 p-2 overflow-auto text-center text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {props.options.map((option:any) => (
                        <Listbox.Option
                            key={option.id}
                            value={option}
                        >
                            {({active})=>(
                                <div className={`${
                                    active ? 'bg-gray-200' : 'bg-white'
                                }`}>
                                    {option.label}
                                </div>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}

Select.defaultProps = {
    style: 'relative m-2 py-2 px-4 mt-1 mb-2 text-left text-gray-700 bg-gray-200 rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm',
    id: 'select',
    inputTitle: '',
    options: [
        { id: 1, label: 'Durward Reynolds', value: 'Durward Reynolds' },
        { id: 2, label: 'Kenton Towne', value: 'Kenton Towne' },
        { id: 3, label: 'Therese Wunsch', value: 'Therese Wunsch' },
        { id: 4, label: 'Benedict Kessler', value: 'Benedict Kessler' },
        { id: 5, label: 'Katelyn Rohan', value: 'Katelyn Rohan' },
    ]
}
