import React from "react";
import Agbelllogo from "../components/Agbelllogo";
import EmailFormComponent from "../components/Form";
import Backgroundimage from "../components/Backgroundimage";
import Agbellbutton from "../components/Agbellbutton";
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  return (
    <div className="bg-custom-grey flex flex-col items-center justify-center min-h-screen p-4 md:p-8 lg:p-12">
      <div className="h-24 w-24 -mt-8 lg:-mt-10 md:h-32 md:w-32 lg:h-40 lg:w-40">
        <Agbelllogo />
      </div>
      <div className="h-28  -mt-5 md:h-28 lg:h-28 mb-12 lg:-mt-16 md:-mt-10">
        <Backgroundimage />
      </div>
      <p className="text-lg md:text-xl lg:text-xl font-semibold mt-16 mb-3">
        Forgot Password
      </p>
      <div className="w-full flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <EmailFormComponent
          label={"Enter Email"}
          placeholder={"lorem@gmail.com"}
          type={"email"}
        />
      </div>
      <div className="mt-6">
        <Link to="/Resetpasswordpage">
          <Agbellbutton text={"Done"} />
        </Link>
      </div>
    </div>
  );
};

export default Forgetpassword;
