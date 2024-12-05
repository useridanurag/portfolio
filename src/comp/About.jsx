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
        <div className="lg:basis-[55%]" data-aos="fade-up" data-aos-duration="2000" >
          <img className='mt-4 md:mt-0 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105' src="https://1drv.ms/i/c/2b8158e257563b12/IQS9vP4xExWdTqZki0u1qZ83AbJhjXpLc6uIApsqbVy_JZY?width=1260&height=700" alt="AboutImg" />

        </div>
        <div className='lg:basis-[45%]'>
          <div className='font-light font-bellefair text-zinc-300 text-lg md:text-[1.40rem] xl:text-[1.7rem]'>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className='shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105'>I am Anurag, a Full Stack Web Developer (MERN), I focus to create modern, user-friendly websites and web applications. I specialize in both front-end (HTML, CSS, Tailwind CSS, JavaScript, React) and back-end development (Node.js Express, MongoDB), and I am passionate about developing robust full-stack web applications, with a strong emphas on both front-end and back-end functionality.
              I am curious and always looking for new ideas and inspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RoundedContainer>
  </>
}

export default About