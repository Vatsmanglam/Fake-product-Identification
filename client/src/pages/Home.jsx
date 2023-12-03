import React from "react";
import { HomeBanner } from "../assets";
import { CustomButton } from "../components";
import { HoverButton } from "../styles";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full h-screen grid grid-cols-2 bg-[#283134]">
      <div className="flex flex-col justify-center items-start pl-[125px] text-white space-y-4">
        <div className="text-[60px] tracking-widest font-bold drop-shadow-3xl leading-[65px]">
          Fake Product Identification
        </div>
        <div className="text-lg tracking-widest font-bold pt-5">
          Scan and verify your product
        </div>
        <div>
          <CustomButton
            title="GET STARTED"
            styles={`bg-[#30dfd7] tracking-widest px-8 mt-2 ${HoverButton}`}
            handleClick={()=>navigate("/login")}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <img src={HomeBanner} alt="HomeBanner" className="animate-bounce" />
      </div>
    </div>
  );
};

export default Home;
