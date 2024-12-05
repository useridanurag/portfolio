import SkillCard from "./SkillCard";
import { FaHtml5, FaCss3Alt, FaReact,FaNodeJs } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { SiMongodb ,SiExpress,SiJavascript} from "react-icons/si";

let html = "HTML"
let htmlPara = "Hypertext Markup Language use to give the structure of web-page."
let htmlIcon = FaHtml5
let htmlColor = "text-orange-600"

let css = "CSS"
let cssPara = "Cascading Style Sheets use for describing the look and formatting of web-page."
let cssIcon = FaCss3Alt
let cssColor = "text-indigo-600"

let tailwind = "Tailwind CSS"
let tailwindPara = "Tailwind CSS is a utility-first CSS framework for design the custom user interface."
let tailwindIcon = RiTailwindCssFill
let tailwindColor = "text-sky-600"

let js = "Javascript"
let jsPara = "JavaScript is a programming language that allows developers to create interactive and dynamic web content."
let jsIcon = SiJavascript
let jsColor = "text-yellow-400"

let react = "React"
let reactPara = "React is a popular JavaScript library for building user interfaces, particularly for single-page applications.."
let reactIcon = FaReact
let reactColor = "text-cyan-400"

let node = "Node"
let nodePara = "Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser."
let nodeIcon = FaNodeJs
let nodeColor = "text-green-600"

let express = "Express"
// let para6 = "Git is a distributed version control system that allows multiple people to work on a project at the same time without overwriting each other's changes."
let expressPara = " Express is a node js web application framework that provides broad features for building web and mobile applications."
let expressIcon = SiExpress
let expressColor = "text-green-600"

let mongoDb = "Mongo DB"
let mongoDbPara = "MongoDB the most popular NoSQL database, is an open-source document-oriented database. The term ‘NoSQL’ means ‘non-relational‘."
let mongoDbIcon = SiMongodb
let mongoDbColor = "text-green-600"

let git = "Git"
let gitPara = "Git is a distributed version control system that allows multiple people to work on a project at the same time without overwriting each other's changes."
let gitIcon = FaGitAlt
let gitColor = "text-orange-600"
const MySkills = () => {
  return <>
       <p className='text-center text-2xl md:text-5xl font-semibold sm:pb-6'>My Skills</p>
        <div className="grid-col-1 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          <SkillCard techName={html} techPara={htmlPara} techIcon={htmlIcon} techColor={htmlColor} />
          <SkillCard techName={css} techPara={cssPara} techIcon={cssIcon} techColor={cssColor} />
          <SkillCard techName={tailwind} techPara={tailwindPara} techIcon={tailwindIcon} techColor={tailwindColor} />
          <SkillCard techName={js} techPara={jsPara} techIcon={jsIcon} techColor={jsColor} />
          <SkillCard techName={react} techPara={reactPara} techIcon={reactIcon} techColor={reactColor} />
          <SkillCard techName={node} techPara={nodePara} techIcon={nodeIcon} techColor={nodeColor} />
          <SkillCard techName={express} techPara={expressPara} techIcon={expressIcon} techColor={expressColor} />
          <SkillCard techName={mongoDb} techPara={mongoDbPara} techIcon={mongoDbIcon} techColor={mongoDbColor} />
          <SkillCard techName={git} techPara={gitPara} techIcon={gitIcon} techColor={gitColor} />
        </div>
    </>
  
}

export default MySkills
