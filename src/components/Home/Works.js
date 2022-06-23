import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../images/carousel-1.png"
import img2 from "../../images/carousel-2.png"
import img3 from "../../images/carousel-3.png"
import img4 from "../../images/carousel-4.png"
import img5 from "../../images/carousel-5.png"
import Footer from '../Shared/Footer';
const Works = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
<div>
    
<div className='bg-[#111430] py-20 px-16'>
<h2 className='text-center pb-8'>Here are some of our works</h2>
            <Carousel responsive={responsive}>
  <div className='mx-5 my-6'><img src={img1} alt="" /> </div>
  <div className='mx-5 my-6'><img src={img2} alt="" /> </div>
  {/* <div className='mx-5'><img src={img3} alt="" /> </div> */}
  <div className='mx-5 my-6'><img src={img4} alt="" /> </div>
  <div className='mx-5 my-6'><img src={img5} alt="" /> </div>
</Carousel>;
        </div>

       <div className='mt-8'>
       <Footer></Footer>
       </div>
</div>
    );
};

export default Works;