import { motion } from "framer-motion"
import Link from "next/link"
import { slideIn,staggerContainer,textVariant } from "../utils/motion";



const Hero = () => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className="w-full flex justify-center items-center xs:mt-[50px] sm:mt-[100px]">
        <div className="xs:w-full lg:w-10/12 lg:mx-auto flex flex-col justify-center items-center py-8 font-poppins ">
            <motion.h1 
             variants={textVariant(1.1)}
            className="xs:w-full dark:text-white xs:text-lg sm:text-xl xs:px-8 md:text-3xl lg:text-4xl font-semibold md:w-[600px] lg:w-[900px] lg:mx-auto text-center">Actionpreneur</motion.h1>
            <motion.p 
              variants={textVariant(1.2)}
            className="xs:w-full dark:text-white xs:text-xs xs:px-6  lg:px-0 md:text-base mt-5 md:w-[500px]  lg:w-[700px] mx-auto text-center leading-8"> Tech sales & Rev Ops analyst growth and strategist, empowering Africa's next generation workforce
            .</motion.p>
               <motion.div
                 variants={slideIn('right', 'tween', 0.2, 1)}
               > 
              <Link href='/about'><motion.button 
         
               whileHover={{scale: 1.1}}
             className="bg-black dark:bg-white dark:text-black text-white rounded-lg mt-5 py-2 px-4 font-mono hover:cursor-pointer">About me</motion.button></Link>
                </motion.div> 
           </div>
    </motion.div>
  )
}

export default Hero