import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const Details = () => {
    const location =useLocation()

    console.log(location)
  return (
    <>
    <Navbar />
    <div  className='ml-20 mt-4'>
        <h1 className='text-3xl font-semibold'>{location.state.data.name}</h1>
        <div className='flex mt-5'>
            <img src={location.state.data.images[0]} className='w-5/12 h-80 rounded-l-xl '/>
            <div>
            <div className='flex'>
                <img src={location.state.data.images[1]} className='w-72 h-36 ml-2'/>
                <img src={location.state.data.images[2]} className='w-72 h-36 ml-2 rounded-r-xl'/>
            </div>
            <div className='flex'>
                <img src={location.state.data.images[2]} className='w-72 h-40 ml-2 mt-4 '/>
                <img src={location.state.data.images[4]} className='w-72 h-40 ml-2 mt-4 rounded-r-xl'/>
            </div>
            </div>
        </div>
        <h1 className='text-2xl font-semibold mt-7'>{location.state.data.address}</h1>
        <h1>{location.state.data.persons} guests . {location.state.data.bedrooms} bedroom . {location.state.data.beds} bed . {location.state.data.bathrooms} bathroom</h1>
        <h1 className='font-semibold text-xl'>{location.state.data.reviewsCount} reviews</h1>
    </div>
    </>
  )
}

export default Details