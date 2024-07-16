import React from "react";
import { Link } from "react-router-dom";
import Agbelllogo from "../components/Agbelllogo";
import EmailFormComponent from "../components/Form";
import Backgroundimage from "../components/Backgroundimage";
import Agbellbutton from "../components/Agbellbutton";

const Signin = () => {
  return (
    <div className="bg-custom-grey flex flex-col items-center justify-start min-h-screen  p-4 lg:p-6">
      <div className="flex flex-col  items-center w-full max-w-md lg:max-w-lg space-y-2">
        <div className="flex flex-col items-center mb-6">
          <div className="h-24 w-24 -mt-8 md:h-32 md:w-32 lg:h-40 lg:w-40">
            <Agbelllogo />
          </div>
          <div className="h-28  -mt-5 md:h-28 lg:h-28 mb-12 lg:-mt-16 md:-mt-10 ">
            <Backgroundimage />
          </div>
        </div>
        <div className="flex flex-col items-center w-full ">
       <div className="mt-3">   <EmailFormComponent
            label={"Email"}
            placeholder={"Enter Your Email"}
            type={"email"}
          /></div>
         <div className="-mt-1"> <EmailFormComponent
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
          /></div>
          <Link to="/Forgotpassword" className="text-xs font-semibold ">
            Forgot Password
          </Link>
        </div>
        <p className="text-xs ">Sign In To Continue</p>
        <div className="text-sm"><Link to="/community">
          <Agbellbutton text={"Sign In"} />
        </Link></div>
        <p className="text-xs ">
          Don't have an account?{" "}
          <Link to="/Signup" className="font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
