import React from "react";
import Data from "../JSONs/AccountData.json";

function Account() {
  return (
    <div>
      {/* Heading bar */}
      <div className="flex justify-between ml-5 mr-5 p-2 mt-2">
        <div className="">
          <h1 className="text-xl font-bold">Account</h1>
          <p>View all of your accounts</p>
        </div>
        <div>
          <button className="bg-gray-300 w-48 h-12 rounded-md hover:bg-gray-200 ml-3  text-xl flex flex-wrap justify-center py-3">
            <p>Manage Account</p>
          </button>
        </div>
      </div>
      <hr />
      {/* content aligned by using map function*/}
      <div className="p-2">
        {Data.map((item, index) => {
          return (
            <div className="flex justify-between m-5">
              <div className="flex">
                <div>
                  <button className="w-8 h-8 bg-slate-400 rounded-md m-2">
                    $
                  </button>
                </div>
                <div>
                  <h1 className="font-bold">{item.payment}</h1>
                  <p className="text-gray-500">{item.adhar}</p>
                </div>
              </div>

              <div className="mr-8">
                <h3 className="font-bold">{item.balance}</h3>
                <p className="text-gray-500">{item.text}</p>
              </div>
              
            </div>
            
          );
        })}
      </div><hr />
    </div>
  );
}

export default Account;
