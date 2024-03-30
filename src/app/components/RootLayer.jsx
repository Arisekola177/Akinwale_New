'use client'
import { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


const RootLayer = ({children}) => {

    const [darkmode, setDarkmode] = useState(false)

    const handleDarkmode = () => {
      setDarkmode(!darkmode)
    }
    
  return (
    <div className={`${darkmode && 'dark'}`}>
        <div className="dark:bg-neutral-700">
        <Navbar handleDarkmode={handleDarkmode} darkmode={darkmode} />
        {children}
        <Footer />
    </div>
    </div>
  )
}

export default RootLayer