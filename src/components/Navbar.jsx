import Logo from '../assets/Logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img src={Logo} alt="logo" className='mx-2 w-10' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <MdEmail />
        </div>
    </nav>
  )
}

export default Navbar