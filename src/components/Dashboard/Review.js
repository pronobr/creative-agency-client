import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ReactStars from 'react-rating-stars-component';
const Review = () => {
    const [review,setReview] =useState(0)
//  const [datane,setDatatrone] =useState(review)
//    let review;
    const { register, formState: { errors }, handleSubmit } = useForm();
    //  const [datane,setDatatrone] =useState()
    // useEffect(() => {
    //     setDatatrone(review)
    // }, [])
    //   console.log(review)

    const onSubmit = data => {
       
        const reviewe ={
         content:data.service,
         point:review
        }
        console.log(reviewe)

        fetch('https://shrouded-bayou-50889.herokuapp.com/review',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(reviewe)

        })
        .then(res =>res.json())
        
       .then(data=>console.log(data))
     }


     const secondExample = {
        size: 30,
        count: 5,
      
        value: 7.5,
        a11y: true,
        isHalf: true,
        // emptyIcon: <i className="far fa-star" />,
        // halfIcon: <i className="fa fa-star-half-alt" />,
        // filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setReview(parseFloat(newValue))
            // review =parseFloat(newValue)
        }
      };


    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
   <label class="label">
   <span class="label-text">Rating</span>

    </label>
   <textarea {...register("service", {
   required:{
  value:true,
  message:"Error  message"
   },

   })} type="text" placeholder="Rating" class="input h-[106px] input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

  </label>
   </div>
   <div>
    <h3>Give Ratting</h3>
    <ReactStars {...secondExample} />
   </div>
   <input className=' flex max-w-xs btn btn-outline' value={"Add Item"} type="submit" />
            </form>
        </div>
    );
};

export default Review;