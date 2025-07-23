import { FaIndustry, FaTools, FaWarehouse, FaGlobe } from "react-icons/fa";
import image1 from "../assets/images/we-specialize-in-manufacturing-high-performance-pu.png"
import image2 from "../assets/images/from-borewell-to-centrifugal-pumps--we-design-cust.png"
import image3 from "../assets/images/our-advanced-facilities-support-high-volume-produc.png"
import image4 from "../assets/images/we-export-globally--delivering-reliable-pumps-that.png"
const cards = [
  {
    icon: <FaIndustry className="text-white text-xl" />,
    title: "Precision Engineering",
    desc: "We specialize in manufacturing high-performance pumps with superior engineering and long-lasting durability.",
    bgImage: image1,
  },
  {
    icon: <FaTools className="text-white text-xl" />,
    title: "Tailored Pump Solutions",
    desc: "From borewell to centrifugal pumps, we design custom-built solutions that match your exact needs and conditions.",
    bgImage: image2,
  },
  {
    icon: <FaWarehouse className="text-white text-xl" />,
    title: "Scalable Production",
    desc: "Our advanced facilities support high-volume production with consistent quality control from start to finish.",
    bgImage: image3,
  },
  {
    icon: <FaGlobe className="text-white text-xl" />,
    title: "Trusted Worldwide",
    desc: "We export globally, delivering reliable pumps that perform in agricultural, industrial, and residential systems.",
    bgImage: image4,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 text-gray-800">Why <span className="text-orange-500">Choose</span> Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group bg-sky-50 rounded-md cursor-pointer shadow-md w-[270px] h-[250px] overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 brightness-50 opacity-60  transition-all duration-500 group-hover:opacity-100   bg-cover bg-center"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              ></div>

              {/* Blue Overlay */}
              <div className="absolute inset-0 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col justify-center h-full  group-hover:text-white">
                <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
                <p className="text-sm  leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
