import { createContext, useState } from "react";

export const Globalcontext = createContext()

export const GlobalcontextProvider = ({children}) =>{

    const [userDetail,setUser] = useState({})
 
    const createUser = (name,email,password) =>{
        setUser({
            userName:name,
            email:email,
            password:password
        })
    }

    console.log(userDetail,'userDetail context');


    return <Globalcontext.Provider value={{createUser,userDetail}}>
        {children}
    </Globalcontext.Provider>
}