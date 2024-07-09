const RoundedContainer = (props) => {
  return <div className='max-w-8xl p-4 mx-10 pb-10 sm:px-16 lg:px-20 sm:mx-16 lg:mx-20 border border-zinc-600 rounded-[2rem] mb-10 lg:mb-20 md:mb-16 -mt-20'>
    {props.children}
  </div>

}

export default RoundedContainer