import Aos from 'aos';
import 'aos/dist/aos.css'
import ResumeDownloadReadMoreBtn from './ResumeDownloadReadMoreBtn';
const Hero = () => {
  Aos.init();
  return <>
    <p id="home" className=''></p>
    <div className="mx-auto max-w-8xl px-10 pt-16 sm:px-16 lg:px-20 bg-gradient-to-b from-zinc-950 via-green-700/10">
      <p className="font-garamond text-[1.8rem] font-bold  text-white sm:text-7xl lg:text-[6.8rem] xl:text-[8rem]">Innovative Web Development for the Modern World .</p><br/>

      <p data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="600"
        className="font-bellefair text-xl sm:text-3xl md:text-3xl text-zinc-300 ">
        A web developer is like a digital architect, building the bridges between ideas and experiences on the internet. With every line of code, they create spaces where creativity, functionality, and innovation meet, shaping how we interact with the online world. It's not just about writing code—it's about crafting seamless experiences that connect people, solve problems, and bring visions to life in the ever-evolving landscape of the web.
      </p>
      <br/>
      <ResumeDownloadReadMoreBtn/>
    </div>
  </>
}

export default Hero

