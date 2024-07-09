import SkillCard from "./SkillCard";
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileCpp } from "react-icons/pi";
// import { FaGitAlt } from "react-icons/fa6";
import { PiBracketsCurlyFill } from "react-icons/pi";





let name1 = "HTML"
let para1 = "Hypertext Markup Language use to give the structure of web-page."
let icon1 = FaHtml5
let color1 = "text-orange-600"

let name2 = "CSS"
let para2 = "Cascading Style Sheets use for describing the look and formatting of web-page."
let icon2 = FaCss3Alt
let color2 = "text-indigo-700"

let name3 = "React"
let para3 = "React is a popular JavaScript library for building user interfaces, particularly for single-page applications.."
let icon3 = FaReact
let color3 = "text-cyan-400"

let name4 = "Tailwind CSS"
let para4 = "Tailwind CSS is a utility-first CSS framework for design the custom user interface."
let icon4 = RiTailwindCssFill
let color4 = "text-sky-700"

let name5 = "C++"
let para5 = "C Plus Plus is a high-level, general-purpose, object-oriented programming language that is an extension of the C language."
let icon5 = PiFileCpp
let color5 = "text-purple-600"

let name6 = "OOP"
// let para6 = "Git is a distributed version control system that allows multiple people to work on a project at the same time without overwriting each other's changes."
let para6 = "Object-oriented programming is not a specific programming language. It is a programming paradigm, where everything revolves around objects."
let icon6 = PiBracketsCurlyFill
let color6 = "text-green-600"

const MySkills = () => {
  return <>
       <p className='text-center text-2xl md:text-5xl font-semibold sm:pb-6'>My Skills</p>
        <div className="grid-col-1 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          <SkillCard techName={name1} techPara={para1} techIcon={icon1} techColor={color1} />
          <SkillCard techName={name2} techPara={para2} techIcon={icon2} techColor={color2} />
          <SkillCard techName={name3} techPara={para3} techIcon={icon3} techColor={color3} />
          <SkillCard techName={name4} techPara={para4} techIcon={icon4} techColor={color4} />
          <SkillCard techName={name5} techPara={para5} techIcon={icon5} techColor={color5} />
          <SkillCard techName={name6} techPara={para6} techIcon={icon6} techColor={color6} />
        </div>
    </>
  
}

export default MySkills
