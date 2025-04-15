import { useState } from "react";
import logo from "../../../public/cars/AutoTech.jpg"
const About = () => {
  const [readMore, setReadMore] = useState(false);
  const setShowMore = () => {
    console.log("checked");
    setReadMore(!readMore);
  };
  return (
    <>
      <div className="w-full h-screen relative mx-auto bg-black text-white flex flex-col justify-center">
        <h1 className="text-7xl pb-10 pl-10">About Us :</h1>
        <div className=" flex items-center justify-center ">
          <div className="basis-1/2 pl-6">
            <img
              src={logo}
              alt="logo"
              className="object-cover rounded-full "
              width={"400px"}
            />
          </div>
          <div className="basis-1/2 flex">
            <span className="text-lg tracking-wide">
              Auto-Tech Pvt. Ltd. is India's largest automotive market for
              selling ,reselling <br /> and leasing services provider. It was
              established by Sharama Bros. in 2002. <br />
              This company has tie with many branded Automobiles company like{" "}
              <br /> Mahindra ,Volkswagen,Audi,Jaguar,Mazda and other leading
              companies <br /> There are more than 150 showrooms among various
              popular cities across India. <br /> We also Start the dealing with
              many other continental and international <br /> clients & vendors
              in now-a-days. <br /> Our wide pool of information varies from
              iconic luxury Automobiles to budget vehciles , from the latest
              Automobiles to a range of used Automobile models.
              <span className={`${readMore ? "visible" : "hidden"}`}>
                Buyers can explore various models of new Automobiles and used
                Automobiles; and can compare available Automobiles in the
                market, according to their budget , by visting our website. We
                constantly strive to make your Buying and selling experience
                {/* pleasant and effortless. <br /> Auto-Tech believes in client
              Satisfication. It provides different facilities and offers to
              its client. we also provide information regarding auto
              financing, insurance and other matters that are related to the
              automobile industry. We have on board , as sellers, a huge panel
              of dealers , banks & insurance Companies for finance , loan and
              insurance facilities.It also provides leasing, re-selling and
              auction features to clients and Automobile-owners. Auto-Tech is
              the most awarded Mahindra dealer in India.There are many awards
              and achievements awarded to Auto-Tech. */}
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-end mr-[665px] mb-5">
          <button
            className="bg-green-700 text-white w-[100px] h-[50px] cursor-pointer rounded-sm"
            onClick={setShowMore}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
