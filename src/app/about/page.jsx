import Image from "next/image"
import akinwale from '../assets/Akinwale.png'


const About = ({darkmode}) => {
  return (
    <div className={`${darkmode && 'dark'}`}>
    <div className="w-full font-montserrat dark:bg-neutral-700">
        <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
             <h1 className="mt-10 font-semibold xs:text:sm md:text-xl lg:text-2xl dark:text-white">About me</h1>
             <div className="mt-10">
                <Image 
                 src={akinwale}
                 width={400}
                 height={300}
                 priority={true}
                 className="rounded-lg"
                />
                <div className="flex justify-center items-center mt-5">
                    <h2 className="lg:text-2xl xs:text-sm md:text-xl dark:text-white ">Bakare John Akinwale</h2>
                </div>
             </div>
             <div className="flex flex-col justify-center items-center">
                <h1 className="py-8 xs:text-base md:text-xl lg:text-3xl font-semibold dark:text-white font-poppins xs:w-[200px] md:w-[400px] mx-auto text-center"> Empowering Businesses Through Strategic Tech Sales Leadership  </h1>
                <h2 className="py-8 font-poppins xs:w-full xs:text-xs sm:text-sm dark:text-white md:text-base md:w-[800px] mx-auto md:px-6 text-center leading-8">As a seasoned tech sales professional, I am passionate about leveraging cutting-edge solutions to drive business growth and exceed client expectations.
                     With a proven track record of strategic sales leadership and an innate ability to identify and capitalize on market opportunities, 
                    I thrive in dynamic and fast-paced environments. My dedication to client success, coupled with exceptional negotiation skills and a deep understanding of industry trends, enables me to forge strong relationships and deliver tangible results. I am committed to staying at the forefront of technological advancements and continuously refining my sales strategies to ensure continued success for my clients and partners</h2>
                
             </div>
        </div>
    </div>
    </div>
  )
}

export default About