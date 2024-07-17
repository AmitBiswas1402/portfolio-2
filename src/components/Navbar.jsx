import Logo from '../assets/Logo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img src={Logo} alt="logo" className='mx-2 w-10' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedinIn />
            <FaGithub />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar