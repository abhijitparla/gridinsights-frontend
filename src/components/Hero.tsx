import {
  faLandmark,
  faMartiniGlassCitrus,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons/faStroopwafel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col">
      <div className="text-7xl font-serif text-center mt-28 m-5 max-w-4xl self-center">
        Power bills <span className="text-blue-600">made simple</span> for solar
        plant owners
      </div>
      <div className="text-center m-7 text-lg max-w-3xl self-center">
        Most solar plant owners find it hard to get a sense of their bills. We
        make your life simple by harnessing the power of technology.
      </div>
      <div className="flex justify-center flex-col mt-5 max-w-3xl self-center">
        <button className="bg-blue-600 self-center m-3 p-3 w-full text-slate-50 border-2 border-blue-600 rounded-lg shadow-lg shadow-slate-300 pl-10 pr-10">
          Get 6 months free
        </button>
        <button className="border-2 border-blue-600 self-center w-full m-3 p-3 rounded-lg shadow-lg shadow-slate-300">
          Watch a video
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center mt-16 text-lg text-slate-500 font-medium">
          Trusted by these companies so far
        </h1>
        <div className="flex p-4 text-center flex-wrap justify-center max-w-5xl">
          <div className="m-5 flex items-center">
            <FontAwesomeIcon
              icon={faLandmark}
              className="w-12 h-12 text-slate-600"
            />
            <h1 className="mt-2 ml-2 text-lg font-semibold text-slate-600">
              Barclays Bank
            </h1>
          </div>
          <div className="m-5 flex items-center">
            <FontAwesomeIcon
              icon={faSeedling}
              className="w-12 h-12 text-slate-600"
            />
            <h1 className="mt-2 ml-2 text-lg font-semibold text-slate-600">
              Mexican Holdings
            </h1>
          </div>
          <div className="m-5 flex items-center">
            <FontAwesomeIcon
              icon={faMartiniGlassCitrus}
              className="w-12 h-12 text-slate-600"
            />
            <p className="mt-2 ml-2 text-lg font-semibold text-slate-600">
              Purple Martini
            </p>
          </div>
          <div className="m-5 flex items-center">
            <FontAwesomeIcon
              icon={faStroopwafel}
              className="w-12 h-12 text-slate-600"
            />
            <p className="mt-2 ml-2 text-lg font-semibold text-slate-600">
              Belgian Waffle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
