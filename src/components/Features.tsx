"use client";

import React, { useState } from "react";
import Dash_One from "@/assets/gridinsights_dummy_1.png";
import Dash_Two from "@/assets/gridinsights_dummy_2.png";
import Dash_Three from "@/assets/gridinsights_dummy_3.png";
import Image from "next/image";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (e: any) => {
    console.log(e.target.id);
    const tab = e.target.id;
    if (tab === "payroll") {
      setActiveTab(0);
    } else if (tab === "claims") {
      setActiveTab(1);
    } else if (tab === "vat") {
      setActiveTab(2);
    } else if (tab === "reports") {
      setActiveTab(3);
    }
    // switch ()
  };

  const checkActiveTab = () => {
    console.log("called hidden");
    // return true
  };

  return (
    <div className="bg-gradient-to-br from-green-600 to-blue-600 text-slate-50 min-h-screen mt-10 pt-20 pb-20 flex flex-col">
      <div className="text-center font-medium text-4xl p-5 max-w-4xl self-center">
        Everything you need to know about your bill details.
      </div>
      <div className="text-center pl-5 pr-5 text-lg max-w-3xl self-center">
        Well everything you need if you aren’t that picky about minor details like compliance.
      </div>
      <div className="backdrop-blur-lg bg-white/10 m-4 p-5 rounded-lg text-center mt-12">
        <button
          className={
            activeTab === 0
              ? `m-3 bg-slate-50 text-blue-600 text-lg rounded-3xl pl-5 pr-5 pt-2 pb-2`
              : `m-3 opacity-65 pl-5 pr-5 pt-2 pb-2 text-lg rounded-3xl hover:backdrop-blur-xl`
          }
          onClick={handleClick}
          id="payroll"
        >
          Power Balance
        </button>
        <button
          className={
            activeTab === 1
              ? `m-3  bg-slate-50 text-blue-600 rounded-3xl text-lg pl-5 pr-5 pt-2 pb-2`
              : `m-3 opacity-65 text-lg pl-5 pr-5 pt-2 pb-2 rounded-3xl hover:backdrop-blur-xl`
          }
          onClick={handleClick}
          id="claims"
        >
          Energy Generation
        </button>
        <button
          className={
            activeTab === 2
              ? `m-3  bg-slate-50 text-blue-600 rounded-3xl text-lg pl-5 pr-5 pt-2 pb-2`
              : `m-3 opacity-65 text-lg pl-5 pr-5 pt-2 pb-2 rounded-3xl hover:backdrop-blur-xl`
          }
          onClick={handleClick}
          id="vat"
        >
          Performance Monitoring
        </button>
        <button
          className={
            activeTab === 3
              ? `m-3  bg-slate-50 text-blue-600 rounded-3xl text-lg pl-5 pr-5 pt-2 pb-2`
              : `m-3 opacity-65 text-lg pl-5 pr-5 pt-2 pb-2 rounded-3xl hover:backdrop-blur-xl`
          }
          onClick={handleClick}
          id="reports"
        >
          Reporting
        </button>
        <div className="p-2" hidden={!(activeTab === 0)}>
          <p className="m-2 mb-6 text-lg max-w-3xl mx-auto">
            Keep track of everyones salaries and whether or not they have been
            paid. Direct Deposit not supported.
          </p>
          <Image
            src={Dash_One}
            alt="First image of the dashboard"
            className="md:mx-auto md:max-w-3xl rounded-lg "
          />
        </div>
        <div className="p-2" hidden={!(activeTab === 1)}>
          <p className="m-2 mb-6 text-lg max-w-3xl mx-auto">
            All the reciepts organized into one place, as long as you dont mind typing in the data by hand. 
          </p>
          <Image
            src={Dash_Two}
            alt="First image of the dashboard"
            className="md:mx-auto md:max-w-3xl rounded-lg "
          />
        </div>
        <div className="p-2" hidden={!(activeTab === 2)}>
          <p className="m-2 mb-6 text-lg max-w-3xl mx-auto">
            We only sell our software to companies that dont deal with VAT at all, so technically we do the VAT stuff they need.
          </p>
          <Image
            src={Dash_Three}
            alt="First image of the dashboard"
            className="md:mx-auto md:max-w-3xl rounded-lg "
          />
        </div>
        <div className="p-2" hidden={!(activeTab === 3)}>
          <p className="m-2 mb-6 text-lg max-w-3xl mx-auto">
            Easily export your data into an Excel spreadsheet where you can do whatever the hell you want to do with it.
          </p>
          <Image
            src={Dash_One}
            alt="First image of the dashboard"
            className="md:mx-auto md:max-w-3xl rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
