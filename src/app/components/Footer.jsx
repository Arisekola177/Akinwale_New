import Link from "next/link"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import { footerVariants } from "../utils/motion"

const Footer = () => {
  return (
    <motion.div 
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className="w-full h-[400px] font-poppins">
        <div className="w-10/12 mx-auto flex justify-between">
             <div className="mt-[100px] flex flex-col gap-4">
                <h2 className="xs:text-sm md:text-xl font-semibold font-mono dark:text-white">Akinwale</h2>
                <h2 className="text-gray-400 xs:text-sm md:text-lg">Tech Sales</h2>
                <h2 className="text-gray-400 xs:text-sm md:text-lg">Revenue Operations</h2>
                <h2 className="text-gray-400 xs:text-sm md:text-lg">Strategy and Growth</h2>
                
             </div>
             <div  className="mt-[100px] flex flex-col gap-5">
             <h2 className=" xs:text-sm md:text-xl font-mono dark:text-white ">Socials</h2>  
              <Link href='https://www.linkedin.com/in/johnbakare/' target="blank"> 
               <FaLinkedin className="text-xl text-blue-600 cursor-pointer" /> 
               </Link>
               <Link href='https://www.instagram.com/actionpreneurr/' target="blank"> 
               <FaInstagram className="text-xl text-red-600 cursor-pointer" /> 
               </Link>
               <Link href='https://www.twitter.com/actionpreneurr/' target="blank"> 
               <FaTwitter  className="text-xl text-blue-600 cursor-pointer"/> 
               </Link>
             </div>
        </div> 
        <h2 className="xs:text-sm xs:text-center xs:mt-20  md:mt-10 dark:text-white text-gray-500">Built by a good samaritan for a good samaritan <br/> in the year 2024 </h2>
    </motion.div>
  )
}

export default Footer