import React from 'react';
import img1 from "../../images/icons/service1.png"
import img2 from "../../images/icons/service2.png"
import img3 from "../../images/icons/service3.png"
import Service from './Service';
const Services = () => {
    const services =[
        {
            name:"Web & Mobile design",
            des:"We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
            img:img1
        },
        {
            name:"Web & Mobile design",
            des:"We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
            img:img2
        },
        {
            name:"Web & Mobile design",
            des:"We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
            img:img3
        }
    ]
    return (
       <div className='flex my-16  justify-center items-center'>
            <div className='grid md:grid-cols-3 grid-cols-1  gap-10'>
            {
                services.map(items =><Service items ={items}></Service>)
            }
        </div>
       </div>
    );
};

export default Services;