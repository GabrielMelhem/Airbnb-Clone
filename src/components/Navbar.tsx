import React from "react";
import airbnb from "../images/airbnb-logo.jpeg";
import search from '../images/search.png'

const Navbar = () => {
  return (
    <div className="flex items-center p-3">
      <img src={airbnb} className="w-24 h-18 ml-10" />
      <div className="ml-80 flex items-center rounded-3xl border border-gray-300 p-2 shadow-lg h-12">
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
    </div>
  );
};

export default Navbar;
