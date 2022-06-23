import React from 'react';
import { useForm } from "react-hook-form";
import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
const Order = () => {
  // const notify = () => toast("Product Added");
  const navigate =useNavigate()
  
  const imgStoragekey ="3865938eefff3a14cd02acc91c1d32e1"
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    // console.log(data)
    const image = data.img[0];
    
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStoragekey}`;
    fetch(url, {
      method: 'POST',
      body: formData
  })
  .then(res =>res.json())
  .then(result =>{
   if(result.success){
     const img =result.data.url;
     console.log(img)
     const booking ={
       name:data.name,
       email:data.email,
       description:data.description,
       service:data.service,
       img:img

     }
     console.log(booking)
     
     fetch('https://shrouded-bayou-50889.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
        .then(res =>{
          //    if(res.success === false){
          //   console.log(res.status)
          //   toast.error('Failed to add Product');
          //   // signOut(auth)
          //   // localStorage.removeItem('accessToken')
          // }
          return res.json()
        })
        // .then(res =>{
        //   res.json()

        // //   if(res.status ===401 ||res.status ===403){
        // //     console.log(res.status)
        // //     signOut(auth)
        // //     localStorage.removeItem('accessToken')
        // //   }
        // //   return res.json()
        // })
        .then(data =>{
          if(data.acknowledged === true) {
            toast.success('Product  added successfully')
            // navigate('/dashboard/order')
            
          }
          else{
            toast.error('Failed to add Product')
          }
        })
        }
      })
  
}
    return (
      <div className='md:ml-20 ml-10'>
      <h2 className='text-3xl  my-8'>Add Product</h2>
      <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
<div class="form-control w-full max-w-xs">
<label class="label">
<span class="label-text">Name</span>

</label>
<input {...register("name", {required:{ value:true, message:"Error name"}

})} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
<label className="label pb-0">
{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

</label>
</div>
<div class="form-control w-full max-w-xs">
<label class="label pb-0">
<span class="label-text">Email</span>

</label>
<input {...register("email", {
required:{
  value:true,
  message:"Error email message"
},
pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
})} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
<label className="label">
{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
</label>
</div>
<div class="form-control w-full max-w-xs">
<label class="label pb-0">
<span class="label-text">Description</span>

</label>
<input className='' {...register("description", {
required:{
  value:true,
  message:"error message"
},
})} type="text" placeholder="description" class="input py-[30px] input-bordered w-full max-w-xs" />
<label className="label pb-0">
{errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

</label>
</div>
<div class="form-control w-full max-w-xs">
<label class="label pb-0">
<span class="label-text">service</span>

</label>
<input {...register("service", {
required:{
  value:true,
  message:"Error  message"
},

})} type="text" placeholder="price" class="input input-bordered w-full max-w-xs" />
<label className="label pb-0">
{errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

</label>
</div>



<div class="form-control w-full max-w-xs">
<label class="label pb-0">
<span class="label-text">Minimum Quantity  </span>

</label>
<input {...register("minimunQuantity", {
required:{
value:true,
message:" Error   message"
}

})} type="number" placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs" />
<label className="label pb-0">
{errors.minimunQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimunQuantity.message}</span>}


</label>
</div>
<div class="form-control w-full max-w-xs">
<label class="label pb-0">
<span class="label-text">photo</span>

</label>
<input {...register("img", {
required:{
  value:true,
  message:"Error name"
}

})} type="file" placeholder="photo" class="input input-bordered w-full max-w-xs" />
<label className="label pb-0">
{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.file.message}</span>}

</label>
</div>
<input className=' flex max-w-xs btn btn-outline' value={"Add Item"} type="submit" />
</form>
      </div>
  </div>
    );
}

export default Order;