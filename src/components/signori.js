import React from "react";
import { Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import Logo from './signina/logo1.png';
import Fimg from './signupimg/Cool.png';
import twitter from "./signina/skill-icons_twitter.png"

 export default function Signupo ()               {
  return (
    <div className=" grid  md:grid-cols-2 sm:grid-cols-1  ">
      <div className=" lg:w-[100%]  ">
        <img className="xl:ms-24 xl:mt-7 
                         lg:ms-6 lg:mt-7 
                         md:ms-4 md:mt-6 md:mb-8 
                         sm:ms-6 sm:mt-8 sm:mb-8
                         mt-4 " src={Logo} alt="my img"  />

        <main className="grid grid-col justify-items-center  ">
          <form action="" className="lg:w-7/12  font-[JejuMyeongjo]">
            <h1 className=" text-3xl font-bold text-center">Create an account </h1>
            <section className="mb-4 mt-1">
              <Input variant="standard" label="Name*" />
            </section>
            
            <section className="mb-4">
              <Input  variant="standard" label="Email*" />
            </section>
            
            <section className="mb-4">
              <Input variant="standard" label="Mobile Number*" />
            </section>
            
            <section className="mb-1">
              <Input variant="standard" label="Password*" />
            </section>
           
            <br />
            <button className="bg-[#81A356] text-white p-2 rounded-xl w-full">
              Create account 
            </button>
            <br />
            <br />
            <button className="flex items-center justify-center text-black pt-2  pb-2 rounded-xl w-full outline">
              <FcGoogle className="mr-5 text-[30px]" />
              <span>Sign up with Google</span>
            </button>
            <br />
            <button className="flex items-center justify-center text-black p-2 rounded-xl w-full outline">
              
              <img src={twitter} alt="" className=" mr-5 text-[32px]" />
              <span>Sign up with Twitter</span>
            </button>
            <br />
            <div className="text-center">
              Already Have an Account ?
              <span className="text-blue-500">Log in</span>
            </div>
          </form>
        </main>
      </div>

      
      <div className=" lg:w-full  lg:h-screen xl:w-full xl:h-screen   md:w-full  md:h-screen ">
        <img
          src={Fimg}
          className="relative lg:w-full lg:h-screen xl:w-full xl:h-screen w-0 md:w-full md:h-screen   "
          alt="myimg"
        />
        
      </div>
    </div>
  );
};

