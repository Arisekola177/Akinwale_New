import Image from "next/image"
import akinwale from '../../../public/Akinwale1.jpg'
import { slideIn,staggerContainer,textVariant } from "../utils/motion";
import {motion} from 'framer-motion'
const Qoute = () => {


  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    >
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
    className="bg-neutral-900 dark:bg-neutral-200 dark:text-black w-full text-white font-montserrat">
     
          <div className="flex flex-col gap-10 justify-center items-center py-16">
          <motion.blockquote 
           variants={textVariant(1.1)}
          className="xs:w-full xs:text-sm xs:px-2 md:px-0 md:w-[600px] md:mx-auto text-center md:text-2xl font-mono">
               "The individuals who thrive are those who are willing to fail and then get back up! Don't take yourself too seriously, have fun while you're at it"
          </motion.blockquote>
          <motion.div
            variants={slideIn('right', 'tween', 0.4, 1)}
          >
          <Image 
            src={akinwale}
            alt="akinwale"
            width={180}
            height={100}
            className="rounded-lg "
          />
          </motion.div>
         
          </div>
          
    </motion.div>
    </motion.div>
  )
}

export default Qoute