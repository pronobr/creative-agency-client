import React from 'react';

const Service = ({items}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img className='' src={items.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{items.name}</h2>
    <p>{items.des}</p>
    {/* <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default Service;