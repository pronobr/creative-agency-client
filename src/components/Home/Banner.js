import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className=''>
            <div class="hero py-32 min-h-screen wide bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/0QcNG1W/Frame.png" class="w-[600px] rounded-lg shadow-2xl " />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;