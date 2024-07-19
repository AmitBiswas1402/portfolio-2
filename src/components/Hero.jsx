import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/kevinRushProfile.png'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 -pb-4'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    animate={{ x: 100 }} 
                    className='pb-10 text-2xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Amit Biswas
                    </motion.h1>
                    <motion.span 
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text tracking-tight text-2xl text-transparent'
                    >
                        Full Stack Developer
                    </motion.span>
                    <p className="my-2 max-w-md py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={profilePic} alt="pic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero