import { FaUsersCog } from "react-icons/fa"
import { BsGraphUpArrow } from "react-icons/bs";
import { GrIntegration } from "react-icons/gr";

const Card = () => {
    return (
        <>
            <div className="w-full justify-center items-center text-center rounded-lg flex flex-col p-8 bg-white myShadow">
                <FaUsersCog className="text-5xl mb-3 text-[#004aad]" />
                <h2 className="text-xl font-semibold  my-2 text-zinc-800">Always Available</h2>
                <p className="text-zinc-700">The bot handles appointment requests any time of day or night.</p>
            </div>
            <div className="w-full justify-center items-center text-center rounded-lg flex flex-col p-8 bg-white myShadow">
                <BsGraphUpArrow  className="text-4xl mb-3 text-[#004aad]" />
                <h2 className="text-xl font-semibold my-2 text-zinc-800">Scalable for Growth</h2>
                <p className="text-zinc-700">Manage multiple patient calls at once, no extra staff needed.</p>
            </div>
            <div className="w-full justify-center items-center text-center rounded-lg flex flex-col p-8 bg-white myShadow">
                <GrIntegration  className="text-4xl mb-3 text-[#004aad]" />
                <h2 className="text-xl font-semibold my-2 text-zinc-800">Seamless Integration</h2>
                <p className="text-zinc-700">Works with your existing scheduling system for smooth operations.</p>
            </div>
        </>
    )
}

export default Card