import React from 'react'
import { Tab } from "@headlessui/react";
import { Atoms } from './../../Atoms';
import { Hooks } from "./../../../../Hooks";

export default function FormWizard(props: any) {
    const [tabIndex, setTabIndex] = Hooks.useLocalStorage("tabIndex", '0');

    const tabController = (index: number, status: boolean) => {
        return status
        ? props.tabActiveStyle
        : props.tabStyle
    }

    const tabChanger = (action: string) => {        
        const element:any = document.getElementById("tab-list");
        switch(action) {
            case 'next':
                element.children[tabIndex+1].focus();
                window.dispatchEvent(new KeyboardEvent('keydown', {
                    key: "Enter",
                }));
                break;
            case 'previous':
                element.children[tabIndex-1].focus();
                window.dispatchEvent(new KeyboardEvent('keydown', {
                    key: "Enter",
                }));
                break;
            default:
                break;
        }
    }

    const Tabs: JSX.Element[] = 
        props.tabs.map((tab: any, index: number) => {
            const dinamycTab = React.cloneElement(tab, {
                action: tabChanger,
            })
            return dinamycTab;
        });

    return (
        <Tab.Group
            defaultIndex={tabIndex}
            onChange={(index: number) => setTabIndex(index)}
        >
            <Tab.List 
                id="tab-list"
                className={props.stepListStyle}
                >{props.formSteps.map((step: any, index: number) => (
                    <Tab
                        key={index}
                        className={({ selected }) =>{
                            if(selected){
                                setTabIndex(index);
                            }
                            return tabController(index, selected)
                        }}
                    >
                        <Atoms.Animation
                            transitionDuration={0.5 + index * 0.5}
                        >
                            <Atoms.FormWizardStep  
                                step={step.title}
                                icon={step.icon}
                                style={props.stepStyle}
                                isActive={tabIndex === index}
                            />
                        </Atoms.Animation>
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="w-screen">
                {props.formSteps.map((step: any, index: number) => (
                    <Tab.Panel key={index} >
                        <Atoms.Animation>
                            <Atoms.FormWizardtab>
                                {Tabs[index]}
                            </Atoms.FormWizardtab>
                        </Atoms.Animation>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

FormWizard.defaultProps = {
    defaultTab: 0,
    stepListStyle: "",
}