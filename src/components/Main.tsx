import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import Home from "./Home";

const Main = () => {
  const [hotels, setHotels]= useState([])
  const getHotels = async () => {
    const url =
      "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-03-01&checkout=2024-03-12&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cd7bf0ad1amshe69f381454f16abp1afe50jsn1b811c371c75",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setHotels(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHotels();
  }, []);

  console.log(hotels)
  return (
    <div>
      <Navbar />
      <Menubar />
      <Home hotels={hotels}/>
    </div>
  );
};

export default Main;
