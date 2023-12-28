import React from 'react'

export const NavBar = () => {
  return (
    <div className="flex justify-end mr-12 mt-6">
        <div className='rounded-full flex justify-between border-2 p-2' style={{ backgroundColor:"#2D749E1A" , borderColor:"#2D749E" }}>
            <img src="navbarIcons/fi-rr-headset.svg" alt="" />
            <span className='p-2' style={{ color:"#2D749E" }}>Helpdesk</span>
        </div>
        <div className='rounded-full flex justify-between border-2 p-2 mr-4 ml-4' style={{ backgroundColor:"#D7F0E633" , borderColor:"#38B684" }}>
            <img src="navbarIcons/fi-rr-thermometer-half.svg" alt="" />
            <span className='p-2' style={{ color:"#38B684" }}>17°C</span>
        </div>
        <img src="/navbarIcons/Ellipse-9.svg" className='rounded-full ' />
    </div>
  )
}
