import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Income from "../assets/income.png";
import Spend from "../assets/spend.jpeg";

function Overview() {
  return (
    <div>
      {/* Heading bar */}
      <div className="flex justify-between ml-5 mr-5 p-2 mt-2">
        <div className="">
          <h1 className="text-xl font-bold">Overview</h1>
          <p className="text-gray-500">View all of your income & spendings</p>
        </div>
        <div>
          <button className="bg-gray-300 w-48 h-12 rounded-lg hover:bg-gray-200 ml-3 font-bold text-xl flex flex-wrap justify-center py-3">
            <div className="py-1 px-1">
              <FaRegCalendarAlt />
            </div>
            <b>October 2023</b>
          </button>
        </div>
      </div>
      <hr />
      {/* Content */}
      {/* income */}
      <div className="">
        <div className="flex justify-between m-5">
          <div className="p-2">
            <h1 className="text-xl text-gray-400 ml-20">
              <span className="text-green-500">INCOME</span> OF OCTOBER 2023
            </h1>
            <h1 className="text-2xl ml-20">
              $9,420<span className="text-xl text-gray-400">,50</span>
            </h1>
          </div>

          <div>
            <h1 className="text-4xl mr-24  text-gray-400">...</h1>
          </div>
        </div>
        <div className="">
          <img src={Income} alt="Income" className="" />
        </div>
      </div>
      <hr />

      {/* spending */}
      <div className="flex justify-between m-5">
        <div className="p-2">
          <h1 className="text-xl text-gray-400 ml-20">
            <span className="text-red-500">SPENDING</span> OF OCTOBER 2023
          </h1>
          <h1 className="text-2xl ml-20">
            $3,380<span className="text-xl text-gray-400">,75</span>
          </h1>
        </div>
        <div>
          <h1 className="text-4xl mr-24  text-gray-400">...</h1>
        </div>
      </div>
      <img src={Spend} alt="Spend" />
    </div>
  );
}

export default Overview;
