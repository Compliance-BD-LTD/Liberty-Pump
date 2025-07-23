import React from "react";
import centrifugal from "../assets/images/featureImages/66e2931a14ff6.jpg"
// Replace with your actual images if available
const frameImg = "https://airwheelcanada.ca/cdn/shop/files/Airwheel_SE3S_Ride_On_Suitcase_Pink.png?v=1736889364"; // Example frame image (transparent background recommended)
const powerMeterImg = "https://airwheelmexico.com/cdn/shop/files/21.690-Photoroom_8e5394b4-3ab0-4517-86b2-bfb97fc97c43.png?v=1720414156&width=750"; // Example power meter image
import { FaCog, FaBolt, FaShieldAlt, FaLightbulb, FaDollarSign } from 'react-icons/fa';
export default function CoreFeatures() {
    return (
        <div className="max-w-[1340px]  mx-auto rounded-xl w-full flex flex-col md:flex-row max-sm:flex-col-reverse items-center justify-around my-5 px-2">
            {/* Image Left */}
            <div className=" md:w-[700px] rounded-xl flex overflow-hidden justifcdy-center mb-8 md:mb-0">
                {/* Placeholder for Image */}
                <img
                    src={centrifugal}   // Replace this with the actual image path
                    alt="Power Tool"
                    className="h-auto max-w-full w-full object-contain transition-all cursor-pointer duration-700"
                />
            </div>

            {/* Text Right */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start  p-10">
                <h3 className="text-2xl font-semibold mb-2 text-center md:text-left">
                    Power Through Tasks with Precision and Ease
                </h3>
                <p className="text-gray-600 mb-4 text-center md:text-left">
                    Experience enhanced performance that redefines productivity.
                </p>
                {/* Feature List */}
                <div className="space-y-4   ">
                    <div className="flex items-center space-x-2">
                        <FaCog className="text-orange-500 text-3xl" />
                        <p className="text-md font-semibold">Ergonomic Design</p>
                    </div>
                    <p className="text-md text-center md:text-left">
                        Built with high-grade materials to withstand heavy-duty usage
                    </p>
                    <div className="flex items-center space-x-2">
                        <FaBolt className="text-orange-500 text-3xl" />
                        <p className="text-md font-semibold">Powerful Performance</p>
                    </div>
                    <p className="text-md text-center md:text-left">
                        Delivers consistent power for efficient and precise results
                    </p>
                    <div className="flex items-center space-x-2">
                        <FaShieldAlt className="text-orange-500 text-3xl" />
                        <p className="text-md font-semibold">Safety First</p>
                    </div>
                    <p className="text-md text-center md:text-left">
                        Features robust safety mechanisms for worry-free operation
                    </p>
                    <div className="flex items-center space-x-2">
                        <FaLightbulb className="text-orange-500 text-3xl" />
                        <p className="text-md font-semibold">Innovative Features</p>
                    </div>
                    <p className="text-sm text-center md:text-left">
                        Advanced technology for smarter and easier use
                    </p>
                    <div className="flex items-center space-x-2">
                        <FaDollarSign className="text-orange-500 text-3xl" />
                        <p className="text-md font-semibold">Cost Effective</p>
                    </div>
                    <p className="text-sm text-center md:text-left">
                        Engineered for durability and long-term value
                    </p>
                </div>
            </div>
        </div>
    );
}