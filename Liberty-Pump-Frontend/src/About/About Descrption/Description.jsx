import React, { useEffect } from "react";
import { FaIndustry, FaShippingFast, FaTools, FaCogs } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import pumpWarehouse from "../../assets/images/Company About/contemporary-winemaker-factory.jpg"; // Replace with actual pump-related image if needed

export const Description = () => {
    const pumpWarehouseFeatures = [
        {
            icon: <FaIndustry className="text-orange-700 text-3xl" />,
            title: "Advanced Pump Storage",
            desc: "Our warehouse is optimized to store various pump types including fire pumps, submersible units, and deepwell systems. Each unit is carefully organized to ensure product safety and accessibility.",
        },
        {
            icon: <MdOutlineInventory2 className="text-orange-700 text-3xl" />,
            title: "Wide Product Inventory",
            desc: "We maintain a vast and diverse inventory of pumping solutions, ready to meet different industrial, municipal, and commercial requirements efficiently.",
        },
        {
            icon: <FaShippingFast className="text-orange-700 text-3xl" />,
            title: "Fast & Secure Dispatch",
            desc: "Our logistics team ensures timely and damage-free delivery of every pump system, supported by real-time tracking and robust packaging standards.",
        },
        {
            icon: <FaTools className="text-orange-700 text-3xl" />,
            title: "Stringent Quality Checks",
            desc: "Every pump undergoes rigorous performance, safety, and durability tests before it leaves our facility—ensuring top-tier reliability for field deployment.",
        },
    ];

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="w-full bg-gray-100 py-20 flex justify-center overflow-x-hidden">
            <div className="max-w-[1340px] flex flex-col md:flex-row gap-10 items-center px-4 md:px-5">
                {/* Text Left */}
                <div className="w-full md:w-1/2" data-aos="fade-up-right" data-aos-duration="1500">
                    <h2 className="font-bold text-3xl md:text-4xl text-orange-500 mb-4">
                        Our Pump Warehouse
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        At Liberty Pump, our modern warehouse is the central hub for storing and managing a full range of pumping systems. Whether it's a high-capacity fire pump, deepwell submersible unit, or industrial water mover, we ensure every product is maintained, inspected, and ready for dispatch. Explore how we power industries with efficiency, reliability, and precision.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {pumpWarehouseFeatures.map((feature, index) => (
                            <div className="flex items-start gap-4" key={index}>
                                <div className="mt-1">{feature.icon}</div>
                                <div>
                                    <div className="font-semibold text-gray-800">{feature.title}</div>
                                    <div className="text-gray-600 text-sm">{feature.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Right */}
                <div className="w-full h-[400px] bg-blue-200 md:w-1/2" data-aos="fade-up-left" data-aos-duration="2000">
                    <img
                        src={pumpWarehouse}
                        alt="Pump Warehouse"
                        className="rounded-lg w-full h-[500px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
