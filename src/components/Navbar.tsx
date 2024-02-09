import React from "react";
import airbnb from "../images/airbnb-logo.jpeg";
import search from '../images/search.png';
import menu from '../images/menu.png';
import user from '../images/user.png';

const Navbar = () => {
  return (
    <div className="flex items-center p-3 border border-b-gray-300">
      <img src={airbnb} className="w-24 h-18 ml-10" />
      <div className="flex items-center rounded-3xl border border-gray-300 p-2 shadow-lg h-12 ml-80 " >
        <input
          type="text"
          id="first_name"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Place"
          required
        />|
        <input
          type="text"
          id="first_name"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Date"
          required
        />|
        <input
          type="text"
          id="first_name"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Guests"
          required
        />
        <img src={search} className="w-8 h-8"/>
      </div>
      <div className="flex items-center border border-spacing-1 rounded-full p-2 ml-80">
        <img src={menu} className="w-5 h-5"/>
        <img src={user} className="w-8 h-8 ml-3"/>
      </div>
    </div>
  );
};

export default Navbar;
