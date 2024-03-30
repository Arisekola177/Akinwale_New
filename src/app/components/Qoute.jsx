import Image from "next/image"
import download from '../assets/download.jpg'

const Qoute = () => {
  return (
    <div className="bg-neutral-900 dark:bg-neutral-200 dark:text-black w-full text-white font-montserrat">
          <div className="flex flex-col gap-10 justify-center items-center py-16">
          <blockquote className="xs:w-full xs:text-sm xs:px-2 md:px-0 md:w-[600px] md:mx-auto text-center md:text-2xl font-mono">
               "Our strategic sales leadership drives unparalleled revenue growth. With innovative solutions tailored to your business needs, we empower organizations to succeed in today's competitive market."
          </blockquote>
          <Image 
            src={download}
            alt="akinwale"
            width={200}
            className="rounded-lg xs:w-[100px] md:w-[200px]"
          />
          </div>
    </div>
  )
}

export default Qoute