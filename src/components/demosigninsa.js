import { Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
// import { FaTwitter } from "react-icons/fa";
import Logo from './signina/logo1.png';
import Fimg from './signina/signinimg.png'
import twitter from "./signina/skill-icons_twitter.png"
import { useState, useEffect } from "react";

 export default function Signadi ()               {
  const initialValues = { email:"",pass:""};
  const [FormValues , setFormValues] = useState(initialValues)
  const [FormErrors , setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);

    const handleChange=(e)=>{
      console.log(e.target);
      const { name , value  }= e.target 
      setFormValues({ ...FormValues, [name]: value});
      console.log(FormValues)
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
      setFormErrors(validate(FormValues));
      setIsSubmit(true)
    };
    useEffect(()=>{
      console.log(FormErrors);
      if(Object.keys(FormErrors).length === 0 && isSubmit){
        console.log(FormValues)
      }
    },[FormErrors])

    const validate = (values)=>{
      const errors = {};
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
     
      if(!values.email){
        errors.email="Email is Required"
      }else if(!regex.test(values.email)){
        errors.email="this is not valid email"
      }
      if(!values.pass){
        errors.pass="Password is Required"
      }else if(values.pass.length < 4){
        errors.pass="Password is must more than 4 characters"
      }else if(values.pass.length >10){
        errors.pass="Password is must less than 10 characters"
      }
      return errors;
    }

  return (
    <>
   <div className=" grid  md:grid-cols-2 sm:grid-cols-1 ">
      <div className=" lg:w-[100%] ">
        <img className="xl:ms-24 xl:mt-7 
                         lg:ms-6 lg:mt-7 
                         md:ms-4 md:mt-6 md:mb-8 
                         sm:ms-6 sm:mt-8 sm:mb-8
                         mt-4
                         " src={Logo} alt="my img" />

        <main className="grid grid-col justify-items-center ">
          <form action="" onSubmit={handleSubmit} className="lg:w-7/12  font-[JejuMyeongjo]">
            <h1 className="pb-9 text-3xl font-bold text-center">Welcome Back !</h1>
            {Object.keys(FormErrors).length === 0 && isSubmit ? ( <div className="ui message success"> Sign in SuccessFully</div>):(<div></div>) }
            <section>
              <Input variant="standard" label="Email*" id='email' name='email' value={FormValues.email} 
              onChange={handleChange} type="email" />
              <p className="text-[red]" >{FormErrors.email}</p>
            </section>
            <br />
            <section>

              <Input variant="standard" label="Password*" value={FormValues.pass} 
              onChange={handleChange} id='pass' name='pass' type="password" />
            <p className="text-[red]">{FormErrors.pass}</p>
            </section>
            <section className=" flex justify-between py-3  ">
              <div>
                <input type="checkbox" />
                Remember me
              </div>
              <div>Forget Password ?</div>
            </section>
            <br />
            <br />
            <button className="bg-[#81A356] text-white p-2 rounded-xl w-full">
              Login
            </button>
            <br />
            <br />
            <button className="flex items-center justify-center text-black p-2 rounded-xl w-full outline">
              <FcGoogle className="mr-5 text-[30px]"  />
              <span>Sign in with Google</span>
            </button>
            <br />
            <button className="flex items-center justify-center text-black p-2 rounded-xl w-full outline">
              {/* <FaTwitter className="mr-5" /> */}
              <img src={twitter} alt="" className=" mr-5 text-[32px]" />
                   <span>Sign in with Google</span>
            </button>
            <br />
            <div className="text-center">
              Don't Have an Account ?
              <span className="text-blue-500">Sign Up</span>
            </div>
          </form>
        </main>
      </div>
           
      <div className=" lg:w-full  lg:h-screen xl:w-full xl:h-screen   md:w-full  md:h-screen ">
        <img
          src={Fimg}
          className="relative lg:w-full lg:h-screen xl:w-full xl:h-screen  w-0 md:w-full md:h-screen  "
          alt="myimg"
        />
        {/* <h1 className="absolute text-white top-[500px] right-10 md:text-1xl lg:text-2xl xl:text-2xl xl:top-[280px]">
          Remove the darkness by giving <br /> the light of knowledge
        </h1> */}
      </div>
    </div>
  
   </>
  );
};

