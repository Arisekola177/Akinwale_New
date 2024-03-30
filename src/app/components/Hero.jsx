import { motion } from "framer-motion"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center xs:mt-[50px] sm:mt-[100px]">
        <div className="xs:w-full lg:w-10/12 lg:mx-auto flex flex-col justify-center items-center py-8 font-poppins ">
            <h1 className="xs:w-full dark:text-white xs:text-lg sm:text-xl xs:px-8 md:text-3xl lg:text-4xl font-semibold md:w-[600px] lg:w-[900px] lg:mx-auto text-center ">Innovative Tech Sales Solutions  Empowering Businesses to Succeed</h1>
            <p className="xs:w-full dark:text-white xs:text-xs xs:px-6  lg:px-0 md:text-base mt-5 md:w-[500px]  lg:w-[700px] mx-auto text-center leading-8"> Our proven track record showcases exceptional negotiation skills and industry-leading sales performance. 
                Partner with us to unlock new opportunities, maximize sales potential, and elevate your business to new heights.</p>
                 
                   <Link href='/about'><button className="bg-black dark:bg-white dark:text-black text-white rounded-lg mt-5 py-2 px-4 font-mono hover:cursor-pointer hover:animate-bounce">About me</button></Link>
               
        </div>
    </div>
  )
}

export default Hero