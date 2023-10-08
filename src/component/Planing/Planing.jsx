import { FaHome, FaInbox, FaStickyNote, FaStarOfDavid, FaPhone, FaVoicemail, FaClock } from "react-icons/fa";
import WedingIcon from "./flags.png";
import aniversry from "./aniversary.png";
import birthday from "./Birthday.png";
import reternment from "./reternment.png";

const Planing = () => {
  return (
    <div className=" mt-20 ">
      <div>
        <div>
          <h1 className=" text-4xl font-bold ">
            {" "}
            <span className=" text-yellow-400 text-5xl ">Hello!</span> I Want to
            Plan Your Event
          </h1>
        </div>

        <div className=" mt-16 italic  text-2xl grid grid-cols-4 text-center items-center gap-4 ">
          <div className=" space-y-4 flex justify-center flex-col items-center">
            <p>
              {" "}
              <FaHome color="#701e43" size={50}></FaHome>{" "}
            </p>
            <p>Tell Me About Your Event So We Can Begin Planing</p>
          </div>
          <div className="space-y-4 flex justify-center flex-col items-center">
            <p>
              {" "}
              <FaInbox color="#701e43" size={50}></FaInbox>{" "}
            </p>
            <p>Tell Me About Your Event So We Can Begin Planing</p>
          </div>
          <div className="space-y-4 flex justify-center flex-col items-center">
            <p>
              {" "}
              <FaStickyNote color="#701e43" size={50}></FaStickyNote>{" "}
            </p>
            <p>Tell Me About Your Event So We Can Begin Planing</p>
          </div>
          <div className="space-y-4 flex justify-center flex-col items-center">
            <p>
              {" "}
              <FaStarOfDavid color="#701e43" size={50}></FaStarOfDavid>{" "}
            </p>
            <p>Tell Me About Your Event So We Can Begin Planing</p>
          </div>
        </div>
      </div>

      {/* 2nd section start */}
      <div className=" mt-20 ">
        <div className=" space-y-5 ">
          <h1 className="text-5xl font-bold font-sans ">
            Florida Event Planner
          </h1>
          <p className=" text-gray-400 font-bold ">
            Here is How Can We Help You
          </p>
        </div>

        <div className=" grid grid-cols-4 gap-4 mt-14 ">
          <div className=" bg-red-600 text-white text-2xl w-58 rounded-md space-y-3 h-60 flex justify-center flex-col items-center ">
            <div className="  ">
              <img className=" w-16 h-16 " src={WedingIcon} alt="" />
            </div>

            <h2 className="  ">Weedings</h2>
          </div>

          <div className=" bg-yellow-400 text-white text-2xl w-58 rounded-md space-y-3 h-60 flex justify-center flex-col items-center ">
            <div className="  ">
              <img className=" w-16 h-16 " src={birthday} alt="" />
            </div>
            <h2>Birthday</h2>
          </div>

          <div className=" bg-pink-500 text-white text-2xl w-58 rounded-md space-y-3 h-60 flex justify-center flex-col items-center ">
            <div className="  ">
              <img className=" w-16 h-16 " src={aniversry} alt="" />
            </div>
            <h2>Anniversaries</h2>
          </div>

          <div className=" bg-blue-800 text-white text-2xl w-58 rounded-md space-y-3 h-60 flex justify-center flex-col items-center ">
            <div className="  ">
              <img className=" w-16 h-16 " src={reternment} alt="" />
            </div>
            <h2>Retirement </h2>
          </div>
        </div>
      </div>
      {/* 2nd section end */}

      {/* footer */}

       

     
    </div>
  );
};

export default Planing;
