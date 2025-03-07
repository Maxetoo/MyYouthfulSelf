'use client'
import React, { useContext, useState } from 'react'
const AppProvider = React.createContext()

const AppWrapper = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false) 

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <AppProvider.Provider
      value={{
        menuOpen,
        toggleMenuOpen,
      }}
    >
      {children}
    </AppProvider.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppProvider)
}

export { AppWrapper }