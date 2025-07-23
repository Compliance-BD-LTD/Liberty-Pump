import React from 'react';
import React360Viewer from 'react-360-view';
import warehouse from "../assets/images/banner/warehouse.jpg"
const Product360 = () => (
  <div className='space-y-5 mt-10 mx-auto max-sm:px-5'>
    {/* <div>
      <p className='text-3xl font-semibold text-center'> <span className='text-orange-500'>Our</span>  <span className='text-amber-300'>Products</span><span className='text-orange-500'> View </span> </p>
    </div> */}

    <section
      className="w-full md:h-[550px] relative bg-fixed brightness-85 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${warehouse})` }}
    >
      <p className="md:text-5xl  text-3xl font-semibold text-white z-10 text-center">
      Powering Progress with Precision Pumps
      </p>
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>


  </div>
);

export default Product360;