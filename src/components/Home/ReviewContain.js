import React,{useState} from 'react';
import { useEffect } from 'react';
import ReviewContainerRow from './ReviewContainerRow';

const ReviewContain = () => {
    const [state, setstate] = useState([])
   useEffect(() => {
    fetch('http://localhost:5000/review',{
        method:'GET',
            headers: {
                'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
         }
        
    })
    .then(res =>res.json())
    .then(data =>setstate(data))
   }, [])
    return (
        <div className='px-12 py-12'>
            <h2 className='text-center text-2xl py-6 text-bold'>Reviews</h2>
            <div clasName ='grid grid-cols-3 gap-8 mt-12'>
            {
                state.map(items=><ReviewContainerRow items={items}></ReviewContainerRow>)
            }
            </div>
        </div>
    );
};

export default ReviewContain;