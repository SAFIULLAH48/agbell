import React from 'react';
import EmailFormComponent from '../components/Form';
import Agbellbutton from '../components/Agbellbutton';
import Agbelllogo from '../components/Agbelllogo';
import { Link } from 'react-router-dom';

const Signup = () => {
  const formFields = [
    { label: "Enter Name", placeholder: "Lorem Name", type: "text" },
    { label: "Enter Date Of Birth", placeholder: "1-Jan-2000", type: "text" },
    { label: "Enter Email", placeholder: "lorem@gmail.com", type: "email" },
    { label: "Password", placeholder: "*******", type: "password" },
    { label: "Confirm Password", placeholder: "*******", type: "password" }
  ];

  return (
    <div className='bg-custom-grey flex flex-col items-center justify-center min-h-screen p-4 md:p-8 lg:p-12 gap-4'>
      <p className='-mt-8 text-lg md:text-xl lg:text-2xl font-semibold text-center'>Create An Account</p>
      <div className='border rounded-full w-16 h-16 -mt-3 bg-white flex items-center justify-center'>
        <Agbelllogo />
      </div>
      <div className="w-full flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  -mt-3">
        {formFields.map((field, index) => (
          <EmailFormComponent
            key={index}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}
      </div>
      <div className=" w-full flex justify-center -mt-4">
        <Link to="/otpvarification">
          <Agbellbutton text={"Proceed"} />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
