import React from 'react'

const Eventcomponent = ({text,image}) => {
  return (
    <div className='w-80 h-72  bg-custom-grey rounded-2xl overflow-hidden'>
         <img className="w-full h-5/6 rounded-2xl " src={image} alt="Logo" />
         <p className='flex items-center justify-center mt-3'>{text}</p>
    </div> 
  )
}

export default Eventcomponent