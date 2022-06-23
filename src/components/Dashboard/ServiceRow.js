import React from 'react';

const ServiceRow = ({items}) => {
    return (
        <div class="card w-[340px] bg-base-100 shadow-xl">
  <figure><img src={items.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
     {items.name}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>{items.description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">{items.service}</div> 
      {/* <div class="badge badge-outline">Products</div> */}
    </div>
  </div>
</div>
    );
};

export default ServiceRow;