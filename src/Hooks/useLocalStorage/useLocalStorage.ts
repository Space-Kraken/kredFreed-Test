import { useState, useEffect } from "react"
import { Services } from "./../../services";

export const useLocalStorage = (key:string, defaultValue:any) =>{
    const [value, setValue] = useState(()=>{
        return Services.Persistence.getLocalStoredValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;