import { useState, useEffect } from "react";
function useDebounce(value, delay) {
    const [debouncedValue,setDebouncedValue]=useState(value)
    useEffect(()=>{
      const handler = setTimeout(() => setDebouncedValue(value), delay)
        //  Trar veef hamf khi dependence thay dodoir 
        return () =>clearTimeout(handler)
    },[value])
    return debouncedValue;
}

export default useDebounce;