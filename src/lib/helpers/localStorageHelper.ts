export const getLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key)
}
export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, value)
}
export const deleteLocalStorage = (keys: string|string[]) => {
    if(typeof keys === 'string') {
        localStorage.removeItem(keys);
    } else {
        keys.forEach(key => localStorage.removeItem(key))
    }
}
export const clearLocalStorge = () => {
    localStorage.clear()
}