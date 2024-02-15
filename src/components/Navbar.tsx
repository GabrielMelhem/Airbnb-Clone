import React, { useState } from "react";
import airbnb from "../images/airbnb-logo.jpeg";
import search from "../images/search.png";
import menu from "../images/menu.png";
import user from "../images/user.png";
import Signup from "./Signup";
import Login from "./Login";
import earth from "../images/earth.png";
import Globe from "./Globe";

interface currencyProp {
  setCurrency?: any;
  setDate?: any;
  setPlace?: any;
  setGuest?: any;
}

const Navbar = (props: currencyProp) => {
  const [popUp, setPopUp] = useState(false);
  const [sign, setSign] = useState(false);
  const [log, setLog] = useState(false);
  const [globe, setGlobe] = useState<any>(false);

  return (
    <div className="flex items-center p-3 border border-b-gray-300">
      <img src={airbnb} className="w-24 h-16 ml-16" />
      <div className="flex items-center rounded-3xl border border-gray-300 p-2 shadow-lg h-12 ml-80 ">
        <input
          onChange={(e) => props.setPlace(e.target.value)}
          type="text"
          id="text"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Place"
          required
        />
        |
        <input
          onChange={(e) => props.setDate(e.target.value)}
          type="date"
          id="date"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Date"
          required
        />
        |
        <input
          onChange={(e) => props.setGuest(e.target.value)}
          type="text"
          id="guest"
          className=" text-gray-900 text-sm rounded-3xl block w-24 p-2.5 outline-none"
          placeholder="Add Guests"
          required
        />
        <img src={search} className="w-8 h-8" />
      </div>
      <img
        src={earth}
        onClick={() => setGlobe(true)}
        className="w-5 h-5 ml-72 cursor-pointer"
      />
      <div
        onClick={() => setPopUp(!popUp)}
        className=" cursor-pointer flex items-center border border-spacing-1 rounded-full p-2 ml-3"
      >
        {popUp && (
          <div className="shadow-xl h-16 w-28 z-10 absolute bg-white mt-32 p-1">
            <h1
              onClick={() => setSign(!sign)}
              className="font-semibold text-sm"
            >
              Sign Up
            </h1>
            <hr className="mt-2" />
            <h1 onClick={() => setLog(!log)} className="font-thin text-sm">
              Login
            </h1>
          </div>
        )}
        <img src={menu} className="w-5 h-5" />
        <img src={user} className="w-8 h-8 ml-3" />
      </div>
      {sign && <Signup setSign={setSign} />}
      {log && <Login setLog={setLog} />}
      {globe && <Globe setGlobe={setGlobe} setCurrency={props.setCurrency} />}
    </div>
  );
};

export default Navbar;
