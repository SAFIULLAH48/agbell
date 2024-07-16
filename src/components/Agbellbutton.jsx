import React from 'react'

const Agbellbutton = (props) => {
  return (
    <div>
           <button className="bg-gradient-to-r from-custom-lightblack via-custom-darkblue to-custom-blue  w-60 p-1 border rounded-md text-white">
        {props.text}
      </button>
    </div>
  )
}

export default Agbellbutton