import Aos from "aos";
import 'aos/dist/aos.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import Resume from './Resume'
import ThanksCard from "./ThanksCard";


const Footer = () => {
  Aos.init();
  return <>
    <p id="footer"></p>
    <div className='border-b border-zinc-600 '>
      <div className=" main lg:grid lg:grid-cols-2 max-w-8xl py-3 mx-5 sm:mx-10 ">
        <Resume />
        <section>
          <section className='links mb-3 '>
          <p className='text-4xl font-bold lg:pt-0 mt-6 mb-4'>Section</p>
            <p className=' text-xl list-none font-thin cursor-pointer hover:text-blue-500 hover:translate-x-2 duration-300'>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </p>

            <p className=' text-xl list-none font-thin cursor-pointer hover:text-blue-500 hover:translate-x-2 duration-300'>
              <Link to="about" smooth={true} duration={500}>About</Link>
            </p>

            <p className=' text-xl list-none font-thin cursor-pointer hover:text-blue-500 hover:translate-x-2 duration-300'>
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </p>

            <p className=' text-xl list-none font-thin cursor-pointer hover:text-blue-500 hover:translate-x-2 duration-300'>
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </p>

            <p className=' text-xl list-none font-thin cursor-pointer hover:text-blue-500 hover:translate-x-2 duration-300'>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </p>
          </section>

          <section>
            <p className="text-2xl mb-2 mt-3">Connect with me.</p>
            <a href="https://linkedin.com/in/useridanurag/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="inline mr-2 text-[2.50rem] hover:-translate-y-2 duration-300" />
            </a>

            <a className="" href="https://instagram.com/useridanurag/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="inline mr-2 text-[2.50rem] hover:-translate-y-2 duration-300" />
            </a>

            <a className="hover:rounded-full" href="https://facebook.com/useridanurag/" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="inline mr-2 text-[2.50rem] hover:-translate-y-2 duration-300" />
            </a>

            <a className="hover:rounded-full" href="https://twitter.com/useridanurag/" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="inline mr-2 text-[2.50rem] hover:-translate-y-2 duration-300" />
            </a>
          </section>
          <div  className="group inline">
            <a href="https://github.com/useridanurag" target="_blank" rel="noopener noreferrer">
              <button className=" w-full lg:w-[80%] xl:w-[60%] border rounded-lg mt-10 py-3 px-10 text-xl group-hover:text-blue-600 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black border-gray-600 hover:scale-105 duration-200 hover:border-gray-800 hover:from-black hover:to-gray-900">Git Hub<FaGithub className="inline text-3xl ml-4  hover:text-blue-600" /></button>
            </a>
          </div>
          <div className="hidden md:block py-4 lg:w-[80%] xl:w-[60%] hover:-translate-y-2 duration-300"><ThanksCard /></div>

        </section>
      </div>
      <div  className="md:hidden mx-5"><ThanksCard /></div>
    </div>
    <p className='text-center py-1 text-[0.8rem] sm:text-base text-zinc-300 font-extralight '>Copyright © 2024 All Rights Reserved.</p>
  </>
}

export default Footer