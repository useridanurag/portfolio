import { RxDoubleArrowDown } from "react-icons/rx";
import { IoMdArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
const ResumeDownloadReadMoreBtn = () => {
  return (
    <>
      <div className="text-center md:mt-2">
        <a href="https://drive.google.com/uc?export=download&id=1QkIVokd2yL3cV1Ce3tjXUtuPd21fF2XN"> <button
          className="border border-slate-600 hover:border-green-950 hover:shadow-green-700/10 shadow-xl rounded-md px-2 pt-1 pb-3 my-3 mr-3 w-full md:w-auto text-slate-600 text-xl font-extralight hover:text-green-900 hover:-translate-y-2 duration-300 group"
        >
          Download My Resume <span className="animate-bounce inline-block "><IoMdArrowDown className=" inline text-green-900" /></span>
        </button></a>
        <button
          className="border border-slate-600 hover:border-green-950 hover:shadow-green-700/10 shadow-xl rounded-md px-2 pt-1 pb-3 my-3 w-full md:w-auto text-slate-600 text-xl font-extralight hover:text-green-900 hover:-translate-y-2 duration-300 group"
        >
          <Link to="about" smooth={true} duration={500}>
            Read More <span className=" inline-block "><RxDoubleArrowDown className=" inline text-green-900 -rotate-90 group-hover:translate-x-2 duration-300" /></span>
          </Link>
        </button>
      </div>
    </>
  );
};

export default ResumeDownloadReadMoreBtn;
