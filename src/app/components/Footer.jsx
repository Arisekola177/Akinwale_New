import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full h-[400px] font-poppins">
        <div className="w-10/12 mx-auto flex justify-between">
             <div className="mt-[100px] flex flex-col gap-6">
                <h2 className="xs:text-sm md:text-xl font-semibold font-mono dark:text-white">Akinwale</h2>
                <h2 className="text-gray-400 xs:text-sm md:text-xl">Tech Sales</h2>
                
             </div>
             <div  className="mt-[100px] flex flex-col gap-5">
             <h2 className=" xs:text-sm md:text-xl font-mono dark:text-white ">Socials</h2>  
               <FaLinkedin className="text-xl text-blue-600 cursor-pointer" /> 
               <FaInstagram className="text-xl text-red-600 cursor-pointer" /> 
               <FaTwitter  className="text-xl text-blue-600 cursor-pointer"/> 
             
             </div>
        </div> 
        <h2 className="xs:text-sm xs:text-center xs:mt-20  md:mt-10 dark:text-white text-gray-500">@2024, All rights reserved. </h2>
    </div>
  )
}

export default Footer