'use client'
import Link from 'next/link'
import { useState } from 'react'
import {FaBars, FaTimes, FaToggleOn, FaToggleOff} from 'react-icons/fa'


const Navbar = ({handleDarkmode, darkmode}) => {
    const [open, setOpen] = useState(false)


    const handleNav = () => {
      setOpen(!open)
    }
  return (
    <div className="w-full font-montserrat">
        <div className="xs:w-full xs:px-3 md:px-0 md:w-10/12 md:mx-auto py-6 flex justify-between items-center">
            <div>
               <Link className='sm:text-xl md:text-2xl font-mono font-semibold dark:text-white' href='/'>Akinwale</Link>
            </div>
            <div className="cursor-pointer flex justify-center items-center" onClick={handleDarkmode}>
           {
            darkmode ? (<button className="dark:text-neutral-200"><FaToggleOn className="text-2xl" /></button>)
            :
            ( <button className="dark:text-neutral-200"><FaToggleOff className="text-2xl" /></button>)
           }
         </div>
            <div className='xs:hidden md:block'>
              <Link className='font-mono dark:text-white' href='/about'>About me</Link>
            </div>
            <div onClick={handleNav} className='cursor-pointer xs:block md:hidden'>
                 {
                  open ? <div className='dark:text-white'><FaTimes /></div>
                  : <div className='dark:text-white'><FaBars /></div>
                 }
            </div>
            <div className={`absolute z-[1] right-10 w-[50%]  transition-all duration-500  ${open ? 'top-24 ':'top-[-490px]'}`}>
            <Link className='font-mono text-black dark:text-white' href='/about'>About me</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar