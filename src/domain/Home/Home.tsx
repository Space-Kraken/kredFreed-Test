import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { UI } from "./../../components";

export default function Home() {
    const navigate = useNavigate();
    
    const redirectTo=()=>{
        navigate("/add-user");
    };
    
    return (
        <UI.Organisms.Home
            cardButtonAction={()=>{
                redirectTo();
            }}
        />
    )
}
