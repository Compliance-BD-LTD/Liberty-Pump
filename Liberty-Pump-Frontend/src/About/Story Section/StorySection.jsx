import React, { useEffect } from "react";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";
import officeBuilding from "../../assets/images/Company About/Office Building.jpg"
import scooterImage from "../../assets/image/AboutImage.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const StorySection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="w-full py-14 bg-gray-100">
      <div className="max-w-[1340px] mx-auto px-4">
        {/* History Section */}
        <div   className="flex flex-col md:gap-10 md:flex-row items-center mb-12">
          <div data-aos='fade-right' data-aos-duration="1500" className="w-full mb-8 md:mb-0">
            <img
              src={officeBuilding}
              alt="History"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div data-aos='fade-left' data-aos-duration="1500" className="w-full ">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              History of <span className="text-orange-500">Liberty Pump</span>
            </h2>
            <p className="text-gray-700 text-base mb-6">
             Liberty Pump was founded with a vision to deliver cutting-edge pumping solutions that power essential systems across industries and communities. Our journey began with a clear mission: to provide innovative, reliable, and efficient pumps that meet the highest standards of performance and durability. From fire pumps to submersible and deepwell pumps, our products are engineered to handle the toughest demands with ease. We continuously push the boundaries of design and technology to ensure our pumps support seamless operation, safety, and long-term value for every application.
            </p>
            <button className="text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white rounded-l-full rounded-r-full px-4 py-2  border-2 border-orange-500 font-semibold transition duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col md:gap-10 md:flex-row-reverse items-center">
          <div data-aos='fade-up' data-aos-duration="1500" className="md:w-1/2 w-full mb-8 md:mb-0">
            <img
              src={`https://www.frontlinem.com/wp-content/uploads/2024/02/firepump-frontline-1024x683.jpg`}
              alt="Why Choose Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div data-aos='fade-down' data-aos-duration="1500" className="md:w-1/2  w-full">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Why Choose <span className="text-orange-500">Liberty Pump</span>?
            </h2>
            <p className="text-gray-700 text-base mb-6">
            At Liberty Pump, we are committed to offering our customers solutions that are not only high-performing but also reliable and forward-thinking. Our fire pumps, submersible pumps, and deepwell systems are engineered with top-tier materials and advanced technology to ensure powerful, efficient, and consistent performance. We prioritize durability, ease of operation, and long-term value—making us the trusted choice for industries, engineers, and communities that rely on dependable water movement every day.
            </p>
            <button className="text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white rounded-l-full rounded-r-full px-4 py-2  border-2 border-orange-500 font-semibold transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


export default StorySection;