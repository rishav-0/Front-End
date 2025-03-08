import React, { createContext, useState } from 'react'

export const Globalcontext  = createContext()

export const Globalcontextprovider = ({children}) => {

    const [btnNmae,setBtn] = useState('click me')
    const [mode, setMode] = useState('Light')

  return (
    <Globalcontext.Provider value={{setMode,mode}}>
        {children}
    </Globalcontext.Provider>
  )
}

