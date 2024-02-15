import React from "react";
import rooms from "../images/rooms.png";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase/setup";

interface hotelProp {
  hotels: any;
  currency: any;
}

const Home = (props: hotelProp) => {
  const addHotels =(data:any)=>{
    const hotelDoc = doc(database, "Hotels",`${data?.id}`)
    setDoc(hotelDoc,{
      details:data && data
    })
  }
  return (
    <div className="grid grid-cols-4">
      {props.hotels && props.hotels.map((data: any) => {
        return (
          <>
            <Link onClick={()=> addHotels(data)} to="/details" state={{ data: data }}>
              <div className="max-w-sm rounded-t-xl overflow-hidden w-72 h-11/12 ml-6 mt-7">
                <img
                  className="w-72 h-72 rounded-xl"
                  src={data.images[0]}
                  alt="Living Room"
                />
                <div className="py-1">
                  <h1 className="font-semibold">{data.address}</h1>
                  <p className="text-gray-700 text-sm">{data.name}</p>
                  <h1 className="text-gray-500 text-sm">{data.type}</h1>
                  <h1 className="font-semibold">
                    <span className=" font-normal">
                      {props.currency ?? "$"}
                    </span>{" "}
                    {data.price.rate}
                  </h1>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Home;
