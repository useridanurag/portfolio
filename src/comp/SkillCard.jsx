import Aos from 'aos';
import 'aos/dist/aos.css'

const SkillCard = ({ techName, techPara, techIcon: TechIcon, techColor }) => {
  Aos.init();
  return <>

    <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-mirror="true"
      className="group bg-zinc-900 rounded-xl md:h-70 lg:h-80 xl:h-[17rem] p-6 my-4 sm:my-0 border border-zinc-700">
      <div className='duration-500 group-hover:scale-105 xl:text-xl'>
        <div className={`text-[2.5rem] flex justify-center ${techColor}`}> {<TechIcon />}</div>
        <p className="p-3 font-semibold">{techName}</p>
        <p className="text-zinc-300 group-hover:text-zinc-50">{techPara}</p>
      </div>
    </div>
  </>
}

export default SkillCard
