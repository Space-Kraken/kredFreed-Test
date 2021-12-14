import React from 'react'
import { Disclosure } from "@headlessui/react";
import { FcExpand } from "react-icons/fc";
import { Atoms } from "../../Atoms";

export default function DropdownTabs(props:any) {

    const Content = props.content;

    return (
        <Atoms.Body style={props.style}>
            {props.sections.map((section:any, index:number) => (
                <Disclosure 
                    key={index}
                    as="div" 
                    className="mt-2">
                    {({ open })=>(
                        <>
                            <Disclosure.Button
                                className="flex justify-between w-full px-4 py-2 mb-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                            >
                                <span>{section.title}</span>
                                <FcExpand 
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel
                                className="mx-2 bg-gray-200 p-2 rounded-md"
                            >
                                {Content[index]}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
            <Atoms.Body style={props.actionStyle}>
                {props.action}
            </Atoms.Body>
        </Atoms.Body>
    )
}

DropdownTabs.defaultProps = {
    style:'py-2 px-4',
    sections:[{
        title:'Dropdown Section',
    }],
    actionStyle:'flex flex-row justify-end',
    content:['Dropdown Section Content'] 
}