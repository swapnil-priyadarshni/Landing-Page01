import React from 'react'
import bg from "../../public/images/bg.png"

export default function Body() {
  return (
    <>
    <div className='max-w-screen-xl container mt-20 mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='frame-content'>
    <img src="/images/frame.png" className=" frame1 max-w-xl rounded-lg ml-16 " />
    
    </div>
    <div>
      <h1 className="text-7xl font-bold" style={{background : `url(${bg})`}}>Make The Best Financial Decisions</h1>
      <p className="py-6 font-bold">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
      <button className="btn bg-black text-white hover:bg-red-600">Get Started </button>
      <button className="btn btn-button-primary m-5"> Watch Video</button>
      <img src="/images/body.png" alt="" />
    </div>
  </div>
</div>
    </div>
    </>
  )
}
