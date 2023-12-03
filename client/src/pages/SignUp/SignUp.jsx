import React from "react";
import Input from "../../components/Input";
import { CustomButton } from "../../components";
import { HoverButton } from "../../styles";
import { Link, Navigate } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-[white] bg-[#283134]  ">
    <div className="max-w-[450px] w-full p-4 py-8 z-10  rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] shadow-white">
        <div className="flex flex-row justify-center my-5 font-bold text-xl tracking-wider items-center w-full  ">
          Create Account | Signup
        </div>
        <form action="" className="px-6">
          <Input type="email" placeholder="Email" styles="mt-2" />
          <Input type="password" placeholder="Password" styles="mt-2" />
          <Input type="password" placeholder="Confirm Password" styles="mt-2" />
          <div className="flex flex-row justify-center items-center">
            <CustomButton
              btnType="submit"
              title="SIGN UP"
              styles={`bg-[#30dfd7] tracking-widest py-2 px-6 mt-12 ${HoverButton}`}
            />
          </div>
        </form>
        <div className="flex flex-row justify-center items-center w-full font-semibold mt-5 text-sm tracking-wide">
            ALREADY HAVE AN ACCOUNT ?&nbsp; <Link to="/login"><span className="underline text-[15px]">Login</span></Link>  
        </div>
      </div>
    </div>
  );
};

export default Signup;
