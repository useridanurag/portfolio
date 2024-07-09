import Aos from 'aos';
import 'aos/dist/aos.css'
const SoftSkills = () => {
  const mySoftSkills = ['Communication', 'Problem Solving', 'Team Work', 'Time Management', 'Creativity', 'Learn from Mistakes'];
Aos.init();
  return <>
    <p className='text-center text-2xl md:text-5xl font-semibold sm:pb-6'>My Soft Skills</p>
    <div 
     className="grid-col-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {mySoftSkills.map((item, index) =>
        <p data-aos="zoom-in"
        data-aos-duration="1000" key={index} className="flex items-center justify-center w-full text-xl border rounded-xl h-16 my-3 md:my-0 hover:text-[1.35rem]">{item}</p>
      )}
    </div>
  </>
}

export default SoftSkills
