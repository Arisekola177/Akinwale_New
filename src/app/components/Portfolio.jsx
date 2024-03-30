import Image from "next/image"
import d3 from '../assets/d3-1.webp'

const Portfolio = () => {
  return (
    <div className="w-full mt-10 xs:py-16 xs:px-2 md:px-0 md:py-36">
        <div className="xs:w-full md:w-10/12 md:mx-auto flex justify-center items-center">
             <Image 
              src={d3}
              alt="portfolio"
              width={1300}
              height={1300}
              className="rounded-lg"
             />
        </div>  
    </div>
  )
}

export default Portfolio