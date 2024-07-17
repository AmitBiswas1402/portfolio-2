import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/kevinRushProfile.png'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 -pb-4'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-10 text-2xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Amit Biswas
                    </h1>
                    <span className='bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text tracking-tight text-2xl text-transparent'>Full Stack Developer
                    </span>
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