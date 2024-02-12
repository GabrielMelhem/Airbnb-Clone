import React, { useState } from "react";
import airbnb from "../images/airbnb-logo.jpeg";
import search from "../images/search.png";
import menu from "../images/menu.png";
import user from "../images/user.png";
import Signup from "./Signup";
import Login from "./Login";

const Navbar = () => {
  const [popUp, setPopUp] = useState(false);
  const [sign, setSign] = useState(false);
  const [log, setLog] = useState(false);
  return (
    <div className="flex items-center p-3 border border-b-gray-300">
      <img src={airbnb} className="w-24 h-18 ml-10" />
      <div className="flex items-center rounded-3xl border border-gray-300 p-2 shadow-lg h-12 ml-80 ">
        <input
          type="text"
          id="first_name"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Place"
          required
        />
        |
        <input
          type="text"
          id="first_name"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Date"
          required
        />
        |
        <input
          type="text"
          id="first_name"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Guests"
          required
        />
        <img src={search} className="w-8 h-8" />
      </div>
      <div onClick={()=>setPopUp(!popUp)} className=" cursor-pointer flex items-center border border-spacing-1 rounded-full p-2 ml-80">
        {popUp && <div className="shadow-xl h-16 w-28 z-10 absolute bg-white mt-32 p-1">
          <h1 onClick={()=>setSign(!sign)} className="font-semibold text-sm">Sign Up</h1>
          <hr className="mt-2" />
          <h1 onClick={()=>setLog(!log)} className="font-thin text-sm">Login</h1>
        </div> }
        <img src={menu} className="w-5 h-5" />
        <img src={user} className="w-8 h-8 ml-3" />
      </div>
      {sign && <Signup setSign={setSign} />}
      {log && <Login setLog={setLog}/>}
    </div>
  );
};

export default Navbar;
