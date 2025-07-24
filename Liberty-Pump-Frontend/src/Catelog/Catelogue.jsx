import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RequireCatelogue } from "./RequireCatelogue"





export const Catelogue = () => {
    
    return (
        <section className="space-y-10 my-10 px-5 ">

            <div>
                <p className="text-center md:text-5xl  text-2xl font-semibold text-orange-500 ">Our Catelogue</p>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-4  gap-5 max-w-[1340px] mx-auto">

                {
                    [1, 2, 3, 4].map((item, index) => {
                        return (
                            <section key={index}>
                                <div  onClick={() => document.getElementById('cateLogue').checked = true}  className="w-[300px] cursor-pointer hover:scale-105 transition-all duration-300 ">
                                    <img src={`https://www.evokepump.com/upload/info/20240903/66d65e2c75017.jpg`} alt="" />
                                    <div className=" group">
                                        <p className="group-hover:underline text-lg text-center font-semibold text-gray-700">Comprehensive Catelogue  <FontAwesomeIcon icon={faDownload} > </FontAwesomeIcon></p>
                                    </div>

                                    
                                </div>

                            <RequireCatelogue></RequireCatelogue>
                            </section>

                        )
                    })
                }


            </div>
        </section>

    )
}
