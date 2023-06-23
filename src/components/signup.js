import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,Textarea,Label
} from "@material-tailwind/react";
import Img from  './signupimg/Cool.png';
import Logo from './signina/logo1.png';
export default function Signup ()  {
  return (
    <>
    {/* <div className="grid sm:grid-cols-1  md:grid-cols-2">

<div> 
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className='text-center font-serif text-4xl' >
        Create an account 
      </Typography>
  
      <form className="mt-8 mb-2  ">
        <div className="mb-4  grid grid-col gap-6 justify-items-center ">
           {/* <div className='w-8/12'> <p className='lg:text-[20px]  sm:text-[18px]'> Name <span className='text-[red] '>*</span></p>
                 <Input   className='text-[18px]'  variant="standard" />
           </div>
             
             
            <section>
              <Input variant="standard" label="Email*" />
            </section>
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  
 </div>
    
  <div>
    <img className='' src={Img} alt="Boy" />
  </div>
  </div> */}

    </>
  )
}
