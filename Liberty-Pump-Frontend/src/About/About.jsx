// import banner from "../assets/img/page-title-bg.jpg"
// import { StaticInfo } from "../Static Info/StaticInfo"
import StorySection from "./Story Section/StorySection"

// import img from "../assets/img/alt-services.jpg"
import { Description } from "./About Descrption/Description"
import TeamSection from "./Team section/TeamSection"
import banner from "../assets/images/banner/Warehouse2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import TestimonialsSlider from "../Testimonials/Testimonials";
export const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="bg-orange-500">
            <div className=" relative w-full  bg-gray-100    -mt-[55px] overflow-hidden " >
                <img src={banner} className="brightness-110 max-sm:object-cover w-full h-full   max-sm:h-[500px]" alt="" />
                <div className=" w-3/4  md:w-[650px]  space-y-5  bg-white/1 backdrop-blur-xs absolute bottom-0  left-1/2 md:left-1/3 transform -translate-x-1/2  -translate-y-1/2">
                    <h1 data-aos='fade-right' data-aos-duration='1000' className="md:text-4xl text-3xl font-bold text-white">Welcome to Liberty <br /> Pump</h1>
                    <p data-aos='fade-left' data-aos-duration='1300' className="md:font-semibold text-gray-300  text-sm md:text-lg  ">Experience next-generation mobility solutions engineered for performance and reliability. At Air Wheeler, we deliver advanced, efficient products to elevate your comfort and productivity, wherever you are..</p>
                    <button className="font-semibold text-white hover:bg-orange-500 transition-all duration-300 cursor-pointer px-10 py-3 rounded-l-full rounded-r-full border-2 border-orange-500">Get Started</button>
                </div>
            </div>

            <StorySection></StorySection>
            {/* <StaticInfo img={img} ></StaticInfo> */}
            <Description></Description>
            <TestimonialsSlider></TestimonialsSlider>

        </div>
    )
}
