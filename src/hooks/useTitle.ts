import { useEffect } from "react"

export const useTitle = (page:string) => {
    useEffect(()=>{
        document.title = `Portfolio | ${page}`
    },[])
}