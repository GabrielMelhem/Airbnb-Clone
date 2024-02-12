import React from "react";
import house from "../images/house.png"
import camping from "../images/camping.jpeg"
import cabin from "../images/cabin.jpeg"
import container from "../images/container.jpeg"
import room from "../images/room.jpeg"
import skiing from "../images/skiing.jpeg"
import top from "../images/top.jpeg"
import view from "../images/view.jpeg"

const Menubar = () => {
  return (
    <div className="flex pt-8">
      <div className="ml-11">
        <img src={house} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline  ">House</h1>
      </div>
      <div className="ml-11">
        <img src={camping} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">Camping</h1>
      </div>
      <div className="ml-11">
        <img src={cabin} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">Cabin</h1>
      </div>
      <div className="ml-11">
        <img src={container} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">Container</h1>
      </div>
      <div className="ml-11">
        <img src={room} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">Room</h1>
      </div>
      <div className="ml-11">
        <img src={skiing} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">Skiing</h1>
      </div>
      <div className="ml-11">
        <img src={top} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">Top</h1>
      </div>
      <div className="ml-11">
        <img src={view} className="w-6 h-6"/>
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">View</h1>
      </div>
    </div>
  );
};

export default Menubar;
