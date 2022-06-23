import React,{useState,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import ServiceRow from './ServiceRow';
const ServiceList = () => {
    const [service,setService] =useState([])
    const [user] =useAuthState(auth)
    const email =user?.email
    useEffect(() =>{
        fetch(`https://shrouded-bayou-50889.herokuapp.com/booking/${email}`,{
            method:'GET',
            headers: {
                // 'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setService(data)
        })
    },[user])
    
    return (
        <div className ="my-6 px-6 pt-12 ">
            <h2 className ="text-center">Purchase Products</h2>
            <div className='grid grid-cols-3 gap-8 mt-12'>
           {
            service.map(items =><ServiceRow items={items}></ServiceRow>)
           }
        </div>
        </div>
    );
};

export default ServiceList;