export const Persistence = {
    getLocalStoredValue(key: string, defaultValue: string){
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved as string);
        return initial || defaultValue
    },
}