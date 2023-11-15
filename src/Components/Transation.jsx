import React from "react";
import Data from "../JSONs/TransationData.json";
import { ImProfile } from "react-icons/im";
import { FiMaximize2 } from "react-icons/fi";
import { FaSearch, FaFilter } from "react-icons/fa";

function Transation() {
  return (
    <div>
      <div className="flex justify-between p-2">
        <div className="p-3">
          <h1 className="font-bold text-2xl">Latest Transaction</h1>
          <p className="text-gray-500">View all of your transactions</p>
        </div>
        <div className="p-3 flex">
          <button className="bg-gray-300 w-28 h-12 rounded-md hover:bg-gray-200 ml-3 font-bold text-xl flex flex-wrap justify-center py-3">
            <div>
              <FaFilter />
            </div>
            <b>Filter</b>
          </button>
          <button className="bg-gray-300 w-12 h-12 rounded-md hover:bg-gray-200 ml-3">
            <FaSearch className="ml-4" />
          </button>
          <button className="bg-gray-300 w-12 h-12 rounded-md hover:bg-gray-200 ml-3 font-bold text-xl px-4">
            <FiMaximize2 />
          </button>
        </div>
      </div>
      <hr />

      {/* table */}
      <div className="mt-5 ml-10 relative overflow-x-auto">
        <table className="w-full table-auto text-xl text-left text-gray-500 ">
          <thead className="">
            <tr className="text-xl text-gray-600 font-bold py-5">
              <th className="py-5">FULL NAME-MAIL</th>
              <th className="py-5">STATUS</th>
              <th className="py-5">DATE</th>
              <th className="py-5">TIME</th>
              <th className="py-5">DESCRIPTION</th>
              <th className="py-5">AMOUNT</th>
            </tr>
          </thead>

          <tbody>
            {Data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="py-5 font-bold text-black flex">
                    <div className="mt-4 mr-2">
                      <ImProfile />
                    </div>
                    <div>
                      {item.name}
                      <br />
                      <span className="text-gray-400">{item.mail}</span>
                    </div>
                  </td>
                  <td className="py-5 ">
                    {" "}
                    <button
                      className={`rounded-2xl w-28 font-bold p-1 border border-${
                        item.status === "SUCCESS"
                          ? "green-500 && text-green-500"
                          : "red-500 && text-red-600"
                      }`}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td className="py-5">{item.date}</td>
                  <td className="py-5">{item.time}</td>
                  <td className="py-5 text-gray-700 font-bold">
                    {item.description}
                    <br />
                    <span className="text-gray-400 text-sm">
                      {item.subscription}
                    </span>
                  </td>
                  <td className="py-5">
                    <b
                      className={
                        item.Amount.startsWith("+$")
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {item.Amount}
                    </b>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transation;
