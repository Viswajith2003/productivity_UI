import React from "react";
import Recharts from "./Recharts";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";

function Analysis() {
  return (
    <div>
      <div className="">
        <div className="flex justify-between m-4 p-1 items-center">
          <div className="ml-20">
            <h1 className="font-bold text-2xl">Assest Analysis</h1>
            <p>View all of activites</p>
          </div>
          <div className="mr-16 flex">
            <button className="bg-gray-300 w-28 h-12 rounded-md hover:bg-gray-200 ml-3 font-bold text-xl flex flex-wrap justify-center py-3">
              <div className="py-1 px-1">
                <FaRegCalendarAlt />
              </div>
              <b>2023</b>
            </button>
            <button className="bg-gray-300 w-12 h-12 rounded-md hover:bg-gray-200 ml-3 font-bold text-xl px-4">
              <FiMaximize2 />
            </button>
          </div>
        </div>
        <hr />

        {/* main content and graph */}
        <div className="flex justify-between ml-5 mr-5 m-3">
          <h1 className="text-xl text-gray-400 ml-20">
            <span className="text-green-500">TOTAL ASSET</span> OF OCTOBER 2023
          </h1>
          <h1 className="text-2xl mr-24">
            $89,273<span className="text-xl text-gray-400">,50</span>
          </h1>
        </div>
      </div>
      <Recharts />
    </div>
  );
}

export default Analysis;
