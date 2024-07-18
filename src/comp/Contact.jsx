import { GoLocation } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import RoundedContainer from "./RoundedContainer";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import 'aos/dist/aos.css'
const Contact = () => {
  Aos.init();
  const [pending, setPending] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);
    emailjs
      .sendForm('service_ulpo4g6', 'template_cn0zohi', form.current, {
        publicKey: '17tLQkwML0FbiR0jb',
      })
      .then(
        () => {
          setPending(false);
          // console.log('SUCCESS!');
          alert("I have recieved your message, I will contact you soon.");
          form.current.reset();
        },
        (error) => {
          setPending(false);
          // console.log('FAILED...', error.text);
          alert("Sorry,There was some error !");
          form.current.reset();
        },
      );
  };
  return <>
    <p id="contact" className='pt-44'></p>
    <RoundedContainer >
      <p className='text-center text-2xl md:text-5xl font-semibold sm:pb-6'>Contact</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:flex gap-6'>
        <div className='text-zinc-400 lg:mr-16'>
          <p className='py-6 text-left md:pr-16 text-xl font-medium text-zinc-50'>Get In Touch</p>
          <div className="flex jusitfy-center allign-center pb-2 md:pb-3 hover:text-white">
            <div><GoLocation className="text-2xl pb-1 sm:text-3xl lg:mt-1" /></div>
            <p className="font-light text-sm pl-2 sm:inline sm:pl-4 sm:text-lg md:text-xl lg:text-2xl hover:translate-x-2 duration-300"># G 758, Near Kushal Cinema, Jahangir Puri, Delhi - 110033 (India).</p>
          </div>
          <br />

          <div className="flex jusitfy-center allign-center pb-2 md:pb-3 hover:text-white">
            <div><GoLocation className="text-2xl pb-1 sm:text-3xl lg:mt-1" /></div>
            <p className="font-light text-sm pl-2 sm:inline sm:pl-4 sm:text-lg md:text-xl lg:text-2xl hover:translate-x-2 duration-300"># 117, Hausing Board colony, Bhatoli khurd, Baddi Phase 5, Distt - Solan, Himachal Pradesh - 173205 (India).</p>
          </div>
          <br />

          <div className="flex jusitfy-center allign-center pb-2 md:pb-3 hover:text-white">
            <div><LiaPhoneVolumeSolid className="text-2xl pb-1 sm:text-3xl lg:mt-1" /></div>
            <p className="font-light text-sm pl-2 sm:inline sm:pl-4 sm:text-lg md:text-xl lg:text-2xl hover:translate-x-2 duration-300">+91 - 78760 - 82730</p>
          </div>
          <br />
          <div className="flex jusitfy-start allign-center pb-2 md:pb-3 hover:text-white">
            <div><IoMailOutline className="text-2xl pb-1 sm:text-3xl lg:mt-1" /></div>
            <p className="font-light text-sm pl-2 sm:inline sm:pl-4 sm:text-lg md:text-xl lg:text-2xl hover:translate-x-2 duration-300">forconnectanurag@gmail.com</p>
          </div>

        </div>
        <div className='w-full'>
          <p className='py-6 text-left text-xl font-medium'>Fill the form to start conversation</p>
          <form className="flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label htmlFor="name" className="hidden">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-zinc-900 text-white hover:border hover:border-white focus:border focus:border-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-zinc-900 text-white hover:border hover:border-white focus:border focus:border-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="tel" className="hidden">
                Number
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Phone No.  ( Optional )"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-zinc-900 text-white hover:border hover:border-white focus:border focus:border-white focus:outline-none"

              />
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="tel" className="hidden">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                outline-none
                placeholder="Type your message"
                required
                className="w-100 h-[6.5rem] mt-2 py-3 px-3 rounded-lg bg-zinc-900 text-white hover:border hover:border-white focus:border focus:border-white focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit" disabled={pending ? true : false}
              className="w-100 bg-zinc-900 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-zinc-800 transition ease-in-out duration-300"
            >
              {pending ? "Sending ..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </RoundedContainer>
  </>
}
export default Contact;
