import Image from "next/image"
import akinwale from '../../../public/Akinwale2.jpg'
import {motion} from 'framer-motion'
import { slideIn,staggerContainer } from "../utils/motion";

const Portfolio = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className="w-full mt-10 xs:py-16 xs:px-2 md:px-0 md:py-36">
        <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
          className="xs:w-full md:w-10/12 md:mx-auto flex justify-center items-center">
             <Image 
              src={akinwale}
              alt="portfolio"
              width={1300}
              height={800}
              className="rounded-lg"
             />
        </motion.div>  
    </motion.div>
  )
}

export default Portfolio