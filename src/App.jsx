import RoundedContainer from './comp/RoundedContainer'
import Navbar from './comp/Navbar'
import Hero from './comp/Hero'
import Marquee from './comp/Marquee'
import About from './comp/About'
import MySkills from './comp/MySkills'
import SoftSkills from './comp/SoftSkills'
import Projects from './comp/Projects'
import Contact from './comp/Contact'
import Whatsapp from './comp/Whatsapp'
import Footer from './comp/Footer'
function App() {
  return (
    <div className='text-white bg-black overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <Hero />
      <About />
      <div id="skills" className='pt-40 pb-28'><RoundedContainer><MySkills /></RoundedContainer></div>
      <div className=""><RoundedContainer><SoftSkills /></RoundedContainer></div>
      <Projects />
      <Contact />
      <Marquee />
      <Whatsapp />
      <Footer />
    </div>
  );
}
export default App