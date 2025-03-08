import React,{createContext,useState} from 'react'

export const Globalcontext = createContext()

export  const GlobalcontextProvider = ({children}) => {
    const [name,setName] = useState('rishav')

  return <Globalcontext.Provider value={{name,setName}} >
    {children}
  </Globalcontext.Provider>
}

