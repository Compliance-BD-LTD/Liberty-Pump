import { FaCogs, FaFireAlt, FaShieldAlt, FaCompressAlt } from "react-icons/fa";
import pumpImg from "../assets/images/products/etd32.png"

export default function PumpShowcase() {
    return (
        <section className="relative bg-gradient-to-br from-slate-100 via-white to-slate-50 py-20 px-6 overflow-hidden">
            {/* Rainbow background effect - upside down half moon shape */}
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[350px] bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 opacity-30 rounded-b-full blur-3xl transform -translate-x-1/2 -translate-y-2/3 z-0"></div>

            <div className="relative  max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Product image */}


                {/* Feature box */}
                <div className="lg:w-1/2 bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-200">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight leading-snug">
                        Vertical Pipeline Circulation Pump
                    </h2>

                    <FeatureCard
                        icon={<FaFireAlt className="text-red-500 text-xl" />}
                        title="Thermal Ready"
                        desc="Handles -15°C to 120°C liquid temperature for full heating & cooling system support."
                    />

                    <FeatureCard
                        icon={<FaCogs className="text-gray-700 text-xl" />}
                        title="Tool-Free Maintenance"
                        desc="Quick motor pull-back design makes service efficient without disassembly."
                    />

                    <FeatureCard
                        icon={<FaShieldAlt className="text-green-600 text-xl" />}
                        title="Tough Exterior"
                        desc="Anti-corrosion coating resists wear in demanding industrial setups."
                    />

                    <FeatureCard
                        icon={<FaCompressAlt className="text-cyan-600 text-xl" />}
                        title="Compact Inline Fit"
                        desc="Smart vertical layout saves installation space in tight mechanical rooms."
                    />

                    <div className="pt-4">
                        <button className="bg-cyan-600 text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-cyan-700 transition">
                            Enquire Now
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src={pumpImg}
                        alt="Pipeline Pump"
                        className="w-[350px] transition-transform hover:scale-105 duration-500 ease-in-out drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center shadow bg-white">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500 leading-snug">{desc}</p>
            </div>
        </div>
    );
}
