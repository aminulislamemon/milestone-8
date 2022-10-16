import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import React, { useState } from "react";

const SideBar = ({ exerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);
  const breakTimeHandler = (sec) => {
    setBreakTime(sec);
    localStorage.setItem("break-time", JSON.stringify(sec));
  };
  const toastHandler = () =>{
    swal("Good job!", "Your WorkOut is Done!", "success");
  }
  return (
    <div className="h-[900px] lg:w-[300px] sm:w-[250px] bg-white relative top-[-78px]">
      <div className="flex items-center absolute ml-5 mt-3">
        <img
          className="w-[40px] rounded-full"
          src="https://static.generated.photos/vue-static/home/feed/latino-male.png"
          alt=""
        />
        <div>
          <h1 className="font-semibold">Rayan Rynold</h1>
          <div className="flex text-gray-400 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="ml-2">West Hollywood, US</p>
          </div>
        </div>
      </div>
      <div
        className="flex items-center  w-[260px] h-[80px] rounded-lg absolute top-24 ml-5"
        style={{ backgroundColor: "#f2f4fa" }}
      >
        <div className="ml-6">
          <p className="font-bold text-2xl">
            60<span className="font-normal text-sm text-gray-400">kg</span>
          </p>
          <p className="text-gray-500">Weight</p>
        </div>
        <div className="ml-9">
          <p className="font-bold text-2xl">5.6</p>
          <p className="text-gray-500">Height</p>
        </div>
        <div className="ml-9">
          <p className="font-bold text-2xl">
            23<span className="font-normal text-sm text-gray-400">yrs</span>
          </p>
          <p className="text-gray-500">Age</p>
        </div>
      </div>
      <div className="relative top-[200px] ml-5">
        <h1 className="pb-2 font-bold">Add a break</h1>
        <div
          className="flex w-[260px] h-[80px] rounded-lg"
          style={{ backgroundColor: "#f2f4fa" }}
        >
          <p
            onClick={(e) => {
              breakTimeHandler(e.target.innerText);
            }}
            className="w-[50px] h-[50px] flex items-center justify-center ml-3 mt-4 cursor-pointer hover:bg-green-500 hover:text-white rounded-full bg-white"
          >
            10
          </p>
          <p
            onClick={(e) => {
              breakTimeHandler(e.target.innerText);
            }}
            className="w-[50px] h-[50px] flex items-center justify-center ml-3 mt-4 cursor-pointer hover:bg-green-500 hover:text-white rounded-full bg-white"
          >
            15
          </p>
          <p
            onClick={(e) => {
              breakTimeHandler(e.target.innerText);
            }}
            className="w-[50px] h-[50px] flex items-center justify-center ml-3 mt-4 cursor-pointer hover:bg-green-500 hover:text-white rounded-full bg-white"
          >
            20
          </p>
          <p
            onClick={(e) => {
              breakTimeHandler(e.target.innerText);
            }}
            className="w-[50px] h-[50px] flex items-center justify-center ml-3 mt-4 cursor-pointer hover:bg-green-500 hover:text-white rounded-full bg-white"
          >
            30
          </p>
        </div>
      </div>
      <div className="relative top-[230px] ml-5">
        <h1 className="font-bold">Exercise Details</h1>
        <div
          className="flex items-center  w-[260px] h-[60px] rounded-lg mt-3"
          style={{ backgroundColor: "#f2f4fa" }}
        >
          <h1 className="font-bold ml-3">Exercise time</h1>
          <p className="text-gray-500 ml-10">{exerciseTime} minutes</p>
        </div>
        <div
          className="flex items-center  w-[260px] h-[60px] rounded-lg mt-3"
          style={{ backgroundColor: "#f2f4fa" }}
        >
          <h1 className="font-bold ml-3">Break time</h1>
          <p className="text-gray-500 ml-10">{breakTime} seconds</p>
        </div>
        <button onClick={()=>{toastHandler()}} className="w-[260px] h-[50px] bg-green-500 rounded-lg mt-10 text-white text-lg">
          Exercise Complete
        </button>
      </div>
    </div>
  );
};

export default SideBar;
