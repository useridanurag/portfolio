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
        I am Anurag, a web developer who focuses on achieving modern websites with better user interface as well as better user experience. I bring value to web development projects by combining technical expertise with creativity and aesthetics. I am curious and always looking for new ideas and inspirations.
      </p>
      <br/>
      <ResumeDownloadReadMoreBtn/>
    </div>
  </>
}

export default Hero

