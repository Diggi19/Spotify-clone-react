import React, { createContext, useContext, useReducer } from "react";

export const Appcontext = createContext()

export const StateProvider = ({children,reducer,initialstate})=>{
    return(
        <Appcontext.Provider value={useReducer(reducer,initialstate)}>{children}</Appcontext.Provider>
    )
}

export const useStateValue = ()=> useContext(Appcontext)