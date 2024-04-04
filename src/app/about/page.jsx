'use client'
import Image from "next/image"
import akinwale from '../assets/new.jpg'
import { FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer, textVariant, textVariant2 } from "../utils/motion"


const About = ({darkmode}) => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    
    className={`${darkmode && 'dark'}`}>
    <motion.div 
      variants={slideIn('right', 'tween', 0.2, 1)}
    className="w-full font-montserrat dark:bg-neutral-700">
        <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
             <motion.h1 
              variants={textVariant(1.1)}
             className="mt-10 font-semibold xs:text:sm md:text-xl lg:text-2xl dark:text-white">About me</motion.h1>
             <motion.div
               variants={fadeIn('right', 'tween', 0.3, 1)}
             className="mt-10">
              <motion.div
              variants={slideIn('right', 'tween', 0.4, 1)}
              >
                <Image 
                 src={akinwale}
                 width={400}
                 height={300}
                 priority={true}
                 className="rounded-lg"
                />
                </motion.div>
                <motion.div
                   variants={slideIn('right', 'tween', 0.4, 1)}
                className="flex flex-col justify-center items-center mt-5">
                    <motion.h2 
                     variants={textVariant(1.2)}
                    className="lg:text-2xl xs:text-sm md:text-xl dark:text-white ">John Bakare</motion.h2>
                    <div className="flex gap-2 items-center mt-2">
                    <FaEnvelope />
                    <p>Bakare.john2015@gmail.com</p>
                    </div>
              
                </motion.div>
             </motion.div>
             <div className="flex flex-col justify-center items-center">
                <motion.h1
                 variants={textVariant(1.1)}
                className="py-8 xs:text-base md:text-xl lg:text-3xl font-semibold dark:text-white font-poppins xs:w-[200px] md:w-[400px] mx-auto text-center"> Currently busy revolutionizing the way we make career descisions in the early stages in Africa  </motion.h1>
                <motion.h2
                 variants={textVariant(1.5)}
                className="py-8 font-poppins xs:w-full xs:text-xs sm:text-sm dark:text-white md:text-base md:w-[800px] mx-auto md:px-6 text-center leading-8">As a seasoned tech sales professional, I am passionate about leveraging cutting-edge solutions to drive business growth and exceed client expectations.
                     With a proven track record of strategic sales leadership and an innate ability to identify and capitalize on market opportunities, 
                    I thrive in dynamic and fast-paced environments. My dedication to client success, coupled with exceptional negotiation skills and a deep understanding of industry trends, enables me to forge strong relationships and deliver tangible results. I am committed to staying at the forefront of technological advancements and continuously refining my sales strategies to ensure continued success for my clients and partners</motion.h2>
                
             </div>
        </div>
    </motion.div>
    </motion.div>
  )
}

export default About