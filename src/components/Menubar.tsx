import React from "react";
import house from "../images/house.png";
import camping from "../images/camping.jpeg";
import cabin from "../images/cabin.jpeg";
import container from "../images/container.jpeg";
import room from "../images/room.jpeg";
import skiing from "../images/skiing.jpeg";
import top from "../images/top.jpeg";
import view from "../images/view.jpeg";

interface menuProp {
  setMenu: any;
}

const Menubar = (props: menuProp) => {
  return (
    <div className="flex pt-8">
      <div
        onClick={() => props.setMenu("House")}
        className="ml-11 cursor-pointer"
      >
        <img src={house} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline  ">House</h1>
      </div>
      <div
        onClick={() => props.setMenu("Room")}
        className="ml-11 cursor-pointer"
      >
        <img src={camping} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">
          Room
        </h1>
      </div>
      <div
        onClick={() => props.setMenu("Townhouse")}
        className="ml-11 cursor-pointer"
      >
        <img src={cabin} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">
          Townhouse
        </h1>
      </div>
      <div
        onClick={() => props.setMenu("Studio")}
        className="ml-11 cursor-pointer"
      >
        <img src={container} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">
          Studio
        </h1>
      </div>
      <div
        onClick={() => props.setMenu("Apartment")}
        className="ml-11 cursor-pointer"
      >
        <img src={room} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">
          Apartment
        </h1>
      </div>
      <div
        onClick={() => props.setMenu("View")}
        className="ml-11 cursor-pointer"
      >
        <img src={skiing} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">
          View
        </h1>
      </div>
      <div
        onClick={() => props.setMenu("Hostel")}
        className="ml-11 cursor-pointer"
      >
        <img src={top} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">
          Hostel
        </h1>
      </div>
      <div
        onClick={() => props.setMenu("Hotel")}
        className="ml-11 cursor-pointer"
      >
        <img src={view} className="w-6 h-6" />
        <h1 className="text-xs font-semibold hover:underline cursor-pointer ">
          Hotel
        </h1>
      </div>
    </div>
  );
};

export default Menubar;
