import React from "react";
import Navbar from "../Components/Navbar";
import Account from "../Components/Account";
import Analysis from "../Components/Analysis";
import Transation from "../Components/Transation";
import Overview from "../Components/Overview";

function Home() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="grid [grid-template-columns:25%_75%] gap-4">
    //     <div className="border  border-black">
    //       <Account className="w-auto" />
    //     </div>
    //     <div className="border border-black">
    //       <Analysis />
    //     </div>
    //     <div className="border border-black ">
    //       <Overview className="w-auto" />
    //     </div>
    //     <div className="border border-black p-1">
    //       <Transation />
    //     </div>
    //   </div>
    // </div>
    <div>
      <Navbar />
      <div className="flex flex-wrap gap-3 p-1">
        <div className="w-1/4 flex flex-col gap-3">
          <div className="border  border-black">
            <Account className="w-auto" />
          </div>
          <div className="border border-black ">
            <Overview className="w-auto" />
          </div>
        </div>
        <div className="max-w-full flex-1 flex flex-col gap-3">
          <div className="border border-black">
            <Analysis />
          </div>
          <div className="border border-black p-1">
            <Transation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
