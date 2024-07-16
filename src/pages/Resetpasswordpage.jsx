import React from 'react';
import { Link } from 'react-router-dom';
import Agbelllogo from '../components/Agbelllogo';
import Backgroundimage from '../components/Backgroundimage';
import EmailFormComponent from '../components/Form';
import Agbellbutton from '../components/Agbellbutton';

const Resetpassword = () => {
  return (
    <div className='bg-custom-grey flex flex-col items-center justify-center min-h-screen p-4 md:p-8 lg:p-12'>
      <div className="h-24 w-24 -mt-16 md:h-32 md:w-32 lg:h-40 lg:w-40">
        <Agbelllogo />
      </div>
      <div className='h-28  -mt-5 md:h-28 lg:h-28 mb-12 lg:-mt-16 md:-mt-10'>
        <Backgroundimage />
      </div>
      <p className="text-lg md:text-xl lg:text-lg font-semibold mt-16">Reset Password</p>
      <div className="w-full flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className='mt-2'>  <EmailFormComponent label={"New Password"} placeholder={"*******"} type={"password"} /></div>
        <div className='-mt-3'>
          <EmailFormComponent label={"Confirm Password"} placeholder={"*******"} type={"password"} />
        </div>
      </div>
      <div className="">
        <Link to="/signin">
          <Agbellbutton text={"Done"} />
        </Link>
      </div>
    </div>
  );
};

export default Resetpassword;
