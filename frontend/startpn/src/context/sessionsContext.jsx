/* eslint-disable react/prop-types */
import { createContext } from "react";

export const SessionsContext = createContext({});



export const SessionsProvider = ({children}) =>{

    const sessionsLogin = async (data)=>{
        console.log(data)
    }



    return(
        <SessionsContext.Provider
        value={{sessionsLogin}} 
        >
        {children}
        </SessionsContext.Provider>
    )
}