import RoundedContainer from './RoundedContainer'
import Aos from 'aos';
import 'aos/dist/aos.css'
const About = () => {
  Aos.init();
  return <>
    <p id="about" className='pt-44'></p>
    <RoundedContainer>
      <p className='text-center text-2xl md:text-5xl font-semibold sm:pb-6'>About</p>
      <div className='grid grid-cols-1 xl:grid-cols-2 xl:flex gap-10 xl:gap-20'>
        <div className="lg:basis-[55%]" data-aos="flip-up" data-aos-duration="2000" >
          <img className='mt-4 md:mt-0 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105' src="" alt="AboutImg" />

        </div>
        <div className='lg:basis-[45%]'>
          <div className='font-light font-bellefair text-zinc-400 text-lg md:text-[1.40rem] xl:text-[1.7rem]'>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <p className='shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105'>I am Anurag, a web developer who focuses on achieving modern websites with better user interface as well as better user experience. I bring value to web development projects by combining technical expertise with creativity and aesthetics.</p>
            </div>

            <br />
            <div data-aos="zoom-in" data-aos-duration="1000">
              <p className=' w-full shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105'>With a strong work ethic and problem-solving habit, I excel as a smart worker who consistently delivers results. I enjoy deal with challenges and finding innovative solutions to complex problems. My adaptability and quick thinking allows me to easily navigate a fast-paced and ever-changing work environment. <br /> I am curious and always looking for new ideas and inspirations.</p>
            </div>
          </div>
        </div>
      </div>
    </RoundedContainer>
  </>
}

export default About