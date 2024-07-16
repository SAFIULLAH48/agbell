import React from 'react';
import { Link } from 'react-router-dom';
import otp from "../assets/images/otp.png";
import Agbellbutton from '../components/Agbellbutton';

const Otpvarification = () => {
  return (
    <div className='bg-custom-grey flex flex-col items-center justify-center min-h-screen p-4 md:p-8 lg:p-12 '>
      <p className='font-semibold -mt-6 text-lg md:text-lg lg:text-xl'>OTP Verification</p>
      <img className="w-40 md:w-48 lg:w-52 mb-4" src={otp} alt="Logo" />
      <p className='font-semibold text-lg md:text-lg lg:text-xl'>Enter OTP Code</p>
      <div className="flex justify-center space-x-2 md:space-x-4 ">
        {[...Array(5)].map(( i) => (
          <input
            key={i}
            className="w-12 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 text-sm md:text-sm lg:text-sm text-center outline-none border rounded-lg border-gray-200"
            maxLength="1"
            type="text"
            pattern="\d*"
            inputMode="numeric"
            placeholder='-'
          />
        ))}
      </div>
      <p className='text-lg md:text-lg lg:text-lg font-semibold mt-4'>Didn't receive an OTP?</p>
      <p className='text-lg md:text-lg lg:text-lg font-bold text-red-400 cursor-pointer'>Resend OTP</p>
      <Link to="/signin" className="mt-4">
        <Agbellbutton text={"Done"} />
      </Link>
    </div>
  )
}

export default Otpvarification;
