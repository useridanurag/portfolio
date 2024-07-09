import React from 'react'
import styles from './Marquee.module.css';
const Marquee = () => {
  return <>
    <div className='font-garamond -mb-7 lg:mb-[0.20rem] border-y border-l border-zinc-600 rounded-bl-[3.5rem] md:rounded-bl-[5rem] flex font-bold overflow-hidden'>
      <div><p className={`${styles.marquee} -mt-48 md:pt-16 text-7xl lg:pt-32 md:text-[10rem] lg:text-[14rem] md:pb-7 px-8`}>Unleash Your Digital Potential With Me .<span className=' text-[20rem]'>{" "}</span></p></div>
      <div><p className={`${styles.marquee} -mt-48 md:pt-16 text-7xl lg:pt-32 md:text-[10rem] lg:text-[14rem] md:pb-7 px-8`}>Unleash Your Digital Potential With Me .<span className=' text-[20rem]'>{" "}</span></p></div>
      <div><p className={`${styles.marquee} -mt-48 md:pt-16 text-7xl lg:pt-32 md:text-[10rem] lg:text-[14rem] md:pb-7 px-8`}>Unleash Your Digital Potential With Me .<span className=' text-[20rem]'>{" "}</span></p></div>
      <div><p className={`${styles.marquee} -mt-48 md:pt-16 text-7xl lg:pt-32 md:text-[10rem] lg:text-[14rem] md:pb-7`}>Unleash Your Digital Potential With Me .<span className=' text-[20rem]'>{" "}</span></p></div>
    </div>
  </>

}
export default Marquee

