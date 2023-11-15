import React from "react";
import Navbar from "../Components/Navbar";
import Account from "../Components/Account";
import Analysis from "../Components/Analysis";
import Transation from "../Components/Transation";
import Overview from "../Components/Overview";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="border border-black m-3 w-3/4 h-3/4">
          <Account className="w-auto" />
        </div>
        <div className="border border-black m-3">
          <Analysis />
        </div>
        <div className="border border-black m-3 w-3/4">
          <Overview className="w-auto" />
        </div>
        <div className="border border-black m-3 h-3/4 p-1">
          <Transation />
        </div>
      </div>
    </div>
  );
}

export default Home;
