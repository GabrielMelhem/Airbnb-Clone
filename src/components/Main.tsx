import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import Home from "./Home";

const Main = () => {
  const [hotels, setHotels] = useState([]);
  const [currency, setCurrency] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState("");

  const getHotels = async () => {
     //const url = `https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-03-01&checkout=2024-04-05&adults=1&children=0&infants=0&pets=0&page=1&currency=${currency ?? "USD"}`;
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${place ?? "Paris"}&checkin=${date ?? new Date()}&checkout=${date ?? new Date()}&adults=${guest ?? "1"}&children=0&infants=0&pets=0&page=1&currency=${currency ?? "USD"}`;
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
  }, [currency,place,date,guest]);



  console.log(hotels);
  return (
    <div>
      <Navbar setCurrency={setCurrency} setGuest={setGuest} setPlace={setPlace} setDate={setDate} />
      <Menubar />
      <Home hotels={hotels} currency={currency} />
    </div>
  );
};

export default Main;
