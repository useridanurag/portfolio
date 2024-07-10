import { BiLinkExternal } from "react-icons/bi";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {
  Aos.init();
  return <>
    <p id="projects" className='pt-20'></p>
    <div className='max-w-8xl mx-10 pl-3 sm:mx-16 lg:mx-20 mb-10 lg:mb-20 md:mb-16 rounded-md bg-gradient-to-r from-green-700/10 via-transparent py-3'>
      <div className='lg:grid xl:grid-cols-5'>
        <div className='pr-3 xl:pt-6 xl:col-span-3 hover:-translate-y-8 duration-500'>
          <div data-aos="fade-left"
            data-aos-duration="1000">
            <p className="text-4xl lg:text-5xl font-bold"># Project 1</p>
            <p className="text-xl lg:text-2xl mt-2 mb-6">Single Page Application</p>
            <img className='w-full rounded-xl xl:hidden' src="https://onedrive.live.com/embed?resid=2B8158E257563B12%21316&authkey=%21AONYHSw4HQ-y_Gw&width=1765&height=1074" alt="Project-Image" />
            <p className="font-bellefair text-xl md:text-3xl font-thin text-zinc-400 mt-4">The concept of this project is to create a single page web application, this project reflects the concept of react router and describes my skills about react and react router to create a conceptual project.</p>
            <a href="https://github.com/useridanurag/reactRouter" target="_blank" rel="noopener noreferrer">
              <button className="border rounded-full my-4 py-4 px-6 text-sm md:text-lg font-thin hover:text-blue-600 group">Get the Source Code : <BiLinkExternal className="inline-block group-hover:text-[1.6rem] group-hover:text-blue-600 " /></button>
            </a>
          </div>
        </div>
        <div className=' hover:-translate-y-8 duration-500 hidden xl:inline  col-span-2'>
          <img data-aos="fade-down"
            data-aos-duration="1000"
            className='rounded-xl ' src="https://onedrive.live.com/embed?resid=2B8158E257563B12%21316&authkey=%21AONYHSw4HQ-y_Gw&width=1765&height=1074" alt="Project-Image" />
        </div>
      </div>
    </div>

    <div className='max-w-8xl mx-10 sm:mx-16 pr-3 lg:mx-20 mb-10 lg:mb-20 md:mb-16 rounded-md bg-gradient-to-l from-green-700/10 via-transparent py-3 '>
      <div className='lg:grid xl:grid-cols-5'>
        <div className=' hover:-translate-y-8 duration-500 hidden xl:inline  col-span-2'>
          <img data-aos="fade-down"
            data-aos-duration="1000"
            className='rounded-xl ' src="https://onedrive.live.com/embed?resid=2B8158E257563B12%21322&authkey=%21AGuc_2bw38jnpQY&width=1920&height=1080" alt="Project-Image" />
        </div>
        <div className='hover:-translate-y-8 duration-500 text-right pl-3 col-span-3'>
          <div data-aos="fade-right"
            data-aos-duration="1000"
            className='xl:pt-6 pl-3'>
            <p className="text-4xl lg:text-5xl font-bold"># Project 2</p>
            <p className="text-xl lg:text-2xl mt-2 mb-6">Portfolio Website</p>
            <img className='w-full rounded-xl xl:hidden' src="https://onedrive.live.com/embed?resid=2B8158E257563B12%21322&authkey=%21AGuc_2bw38jnpQY&width=1920&height=1080" alt="Project-Image" />
            <p className="text-xl font-bellefair md:text-3xl font-thin text-zinc-400 mt-4">My portfolio website is a comprehensive showcase of my skills and works, It is designed and developed with a user friendly interface and clean, professional look to provide a smooth browsing experience for visitors.The website is built using React - js, Tailwind - CSS and other library, which describes my knowladge and understanding of the web teachnology.</p>
            <a href="https://github.com/useridanurag/portfolio" target="_blank" rel="noopener noreferrer">
              <button className="border rounded-full my-4 py-4 px-6 text-sm md:text-lg font-thin hover:text-blue-600 group">Get the Source Code : <BiLinkExternal className="inline group-hover:text-[1.6rem] group-hover:text-blue-600 " /></button>
            </a>

          </div>
        </div>
      </div>
    </div>
  </>
}

export default Projects