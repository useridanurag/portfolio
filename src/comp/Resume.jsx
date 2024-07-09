import Aos from "aos";
import 'aos/dist/aos.css'
import { IoMdArrowDown } from "react-icons/io";

const Resume = () => {
  Aos.init();
  return (
    <section className="resume sm:w-[67%] xl:w-[44%]">
      <p className="text-4xl font-bold lg:pt-0 mt-6 mb-4">Get my Resume</p>
        <div className="hover:translate-x-2 duration-300 mb-1">
        <img data-aos="fade-up"
          data-aos-duration="1000"
          className="object-contain rounded-md" src="https://onedrive.live.com/embed?resid=2B8158E257563B12%21318&authkey=%21AHhCZTCi9YXb_EQ&width=2480&height=3508" alt="resume-view" />
          </div>
        <a href="https://drive.google.com/uc?export=download&id=1QkIVokd2yL3cV1Ce3tjXUtuPd21fF2XN">
          <button
            className="border  border-slate-500 hover:border-green-950 hover:shadow-green-700/10 shadow-xl rounded-md px-2 pt-1 pb-3 my-3 mr-3 w-full text-slate-500  text-xl font-extralight hover: hover:text-green-900 hover:-translate-y-2 duration-300 group ">Download My Resume <span className="animate-bounce inline-block "><IoMdArrowDown className=" inline text-green-900" /></span></button></a>
    </section>
  )
}

export default Resume
