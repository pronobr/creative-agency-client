import React from 'react';
import img1 from "../../images/logos/airbnb.png"
import img2 from "../../images/logos/google.png"
import img3 from "../../images/logos/netflix.png"
import img4 from "../../images/logos/uber.png"
import img5 from "../../images/logos/slack.png"
const Brands = () => {
    const images =[img1,img2,img3,img4,img5]
    return (
        <div className=' py-8  flex items-center flex-col md:flex-row justify-evenly'>
            {
                images.map(items =><img className='w-[120px] my-6' src={items}></img>)
            }
        </div>
    );
};

export default Brands;