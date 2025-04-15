import { FaShoppingCart } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { API_URL_EWS } from "../../utils/constants";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [cars, setCars] = useState(null);
  const getCars = async () => {
    try {
      const response = await fetch(`${API_URL_EWS}/api/cars/get?type=buy`);
      const data = await response.json();
      console.log(data);
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  if (cars)
    return (
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-5xl pl-5 pt-3">DashBoard</h1>
        <div className="flex pl-2 items-center justify-center pt-5 gap-3">
          <div className="h-[200px] w-[350px] bg-black text-white border-5 border-white rounded-lg p-2 ">
            <p className="text-3xl font-bold p-3">Total Cars</p>
            <div className="flex p-2 justify-between px-3 pt-5">
              <FaShoppingCart className="h-[20px] w-[20px] " />
              <p className="text-xl">{cars.data.length}</p>
            </div>
          </div>
          <div className="h-[200px] w-[350px] bg-black text-white border-5 border-white rounded-lg p-2 ">
            <p className="text-3xl font-bold p-3">Cars Purchased</p>
            <div className="flex p-2 justify-between px-3 pt-5">
              <BiSolidPurchaseTagAlt className="h-[20px] w-[20px] " />
              <p className="text-xl">
                {cars.data.filter((car) => car.isAvailableForSale).length}
              </p>
            </div>
          </div>
          <div className="h-[200px] w-[350px] bg-black text-white border-5 border-white rounded-lg p-2 ">
            <p className="text-3xl font-bold p-3">Cars Rented</p>
            <div className="flex p-2 justify-between px-3 pt-5">
              <IoCarSport className="h-[20px] w-[20px] " />
              <p className="text-xl">
                {cars.data.filter((car) => car.isAvailableForRent).length}
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto px-10 pt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Employee Name
                </th>
                <th scope="col" className="px-6 py-3">
                  E-id
                </th>
                <th scope="col" className="px-6 py-3">
                  Employee Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Laksh Sharma
                </th>
                <td className="px-6 py-4">12457ab</td>
                <td className="px-6 py-4">Laksh@gmail.com</td>
                <td className="px-6 py-4">Sales Manager</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Anish Kumar
                </th>
                <td className="px-6 py-4">74563cd</td>
                <td className="px-6 py-4">Anishk@gmail.com</td>
                <td className="px-6 py-4">Lawyer</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Aviraj
                </th>
                <td className="px-6 py-4">554457bg</td>
                <td className="px-6 py-4">Avi@gmail.com</td>
                <td className="px-6 py-4">Employee</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative overflow-x-auto px-10 pt-10">
          <table className="w-full text-sm text-left rtl:text-right h-[1500px] text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Car Model
                </th>
                <th scope="col" className="px-6 py-3">
                  Car Price in Rupees
                </th>
                <th scope="col" className="px-6 py-3">
                  Car Mileage
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.data.map((car) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  key={car._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2"
                  >
                    <img
                      src={`${API_URL_EWS}/${car.image}`}
                      className="w-48"
                      alt=""
                    />
                    {car.brand + " " + car.model}
                  </th>
                  <td className="px-6 py-4">{car.price}</td>
                  <td className="px-6 py-4">{car.mileage}</td>
                  <td className="px-6 py-4">{car.location.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Dashboard;
