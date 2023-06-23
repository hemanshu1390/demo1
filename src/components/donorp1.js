
import  logo1  from "./imgc/book1.jpg";
import  logo2  from "./imgc/book2.jpg";
import  logo3  from "./imgc/book3.jpg";
import { Carousel } from "@material-tailwind/react";
 
export default function Crouse() {
  return (
    <div>
    {/* <Carousel autoplay='true' loop   className="rounded-xl  " style={{height:'30vmax'}}>
      <img
        src={logo3}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={logo2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={logo1}
        alt="image 3"
        className="h-full  w-full object-cover"
      />
    </Carousel> */}

        <Carousel transition= { {type: "tween", duration:2} } autoplay='true' loop className="rounded-xl"  style={{height:'30vmax'}} >
          <img
            src={logo3}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={logo2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={logo1}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        
        </div>
      );
    }



