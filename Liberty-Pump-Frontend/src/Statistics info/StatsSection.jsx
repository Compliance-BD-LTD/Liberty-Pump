import CountUp from "react-countup";


export default function StatsSection() {
  const stats = [
    { value: 20, suffix: "+", label: "Industry Experience" },
    { value: 40, suffix: "+", label: "Product Series" },
    { value: 3000, suffix: "+", label: "Product Models" },
    { value: 20, suffix: "+", label: "Certificate" },
  ];

  return (
    <section className="w-full py-12 bg-gray-100   border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 py-20 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (



          <div key={index} className="relative">

            <CountUp enableScrollSpy={true} start={0} end={stat.value} delay={10} >
              {({ countUpRef }) =>
                <div className="text-5xl font font-semibold text-orange-400">
                   <span className="text-5xl font-extrabold text-orange-500" ref={countUpRef} / > +
                </div>
              }
            </CountUp>

            <div className="w-2 h-2 bg-sky-700 rounded-full mx-auto my-2"></div>
            <p className="text-base font-semibold text-gray-800">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
