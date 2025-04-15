import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsPatchQuestion } from "react-icons/bs";
import logo from "../../../public/cars/AutoTech.jpg"
const Contact = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="flex flex-col justify-start items-center bg-white w-[700px] h-[700px]">
        <div className="flex gap-4 items-center">
        <h1 className="text-7xl font-[500] pb-[80px] pt-[40px] text-gray-800">
          Contact Us 
        </h1>
        <img src={logo} alt="Auto-Tech"  className="w-[120px] h-[120px] rounded-full"/>
        </div>
        <div className="flex flex-col gap-6 items-center w-full px-8">
          <div className="flex gap-2 items-center w-full">
            <MdPerson className="h-[40px] w-[40px]" />
            <input
              type="text"
              placeholder="Enter your Name"
              className="border-2 border-black rounded-lg px-3 w-full h-[50px] "
            />
          </div>

          <div className="flex gap-2 items-center w-full">
            <FaPhoneAlt className="h-[20px] w-[40px]" />
            <input
              type="number"
              placeholder="Enter your Phone "
              className="border-2 border-black rounded-lg px-3 w-full h-[50px]"
            />
          </div>

          <div className="flex gap-2 items-center w-full">
            <MdEmail className="h-[30px] w-[40px]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-black rounded-lg px-3 w-full h-[50px]"
            />
          </div>

          <div className="flex gap-2 items-center w-full">
            <BsPatchQuestion className="h-[40px] w-[30px]" />
            <textarea
              type="message"
              placeholder="Enter your query"
              className="border-2 border-black rounded-lg px-3 py-2 w-full h-[150px]"
            />
          </div>
          <button className="bg-black border-1 px-4 py-2 text-white rounded-lg ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
