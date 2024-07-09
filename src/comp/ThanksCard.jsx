import Aos from "aos";
import 'aos/dist/aos.css'
const ThanksCard = () => {
  Aos.init();
  return <div data-aos="zoom-in" data-aos-duration="1000"
    className='border rounded-lg border-green-900 my-4 mb-8 py-4 bg-zinc-950'>
    <p className='text-center text-3xl sm:text-4xl font-semibold font-greatVibes text-red-700'>Thank You</p>
    <p className='text-[0.9rem] sm:text-xl text-center my-1 font-charm text-green-600 pt-2'>It’s so nice that you had the time to view this idea
      <br />
      Wishing you a fantastic day ahead !
    </p>
    <p className='text-center font-thin text-zinc-400 sm:text-lg mt-4'>Anurag</p>

  </div>
}

export default ThanksCard