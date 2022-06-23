import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ReviewContainerRow = ({items}) => {
    const firstExample = {
        size: 30,
        value: items.point,
        edit: false
      };
      
    return (
        <div class="card w-[300px]  bg-base-100 shadow-xl">
  <div class="card-body text-center flex items-center">
    <h2 class="card-title">{items.content}</h2>
    <ReactStars {...firstExample} />
    {/* <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default ReviewContainerRow;