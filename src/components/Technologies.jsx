import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <div className='my-20 text-4xl text-center'>
            Technologies and Frameworks
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-600' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3 className='text-7xl text-blue-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl text-slate-300' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-lime-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiNextdotjs className='text-7xl text-stone-50' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiRedux className='text-7xl text-purple-600' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-300' />
            </div>
        </div>
    </div>
  )
}

export default Technologies