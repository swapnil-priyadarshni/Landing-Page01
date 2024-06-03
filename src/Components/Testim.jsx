import React from 'react'
import bg from "../../public/images/bg.png"

export default function Testim() {
  return (
    <>
    <div>
        <div className='text-center'>
        <h1 className='text-red-600 font-bold text-2xl' >TESTIMONIALS </h1>
        <h1 className='text-7xl font-semibold'>What Are Our Other Users </h1>
        <h1 className='text-7xl font-semibold'>Say About Us?</h1>
        </div>
        <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
          <h3 className='text-3xl flex '> The Best Financial Accounting App Ever!</h3>
            <p className='m-5 text-xl'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            <img src="/images/group.png" alt="" className='hover:cursor-pointer'/>
            <h3 className='mt-5 hover:cursor-pointer hover:text-red-600'>Nick Jonas</h3>

          </div>
          <div className='frame-content'>
          
          <img src="/images/testim.png" className=" frame1 max-w-xl rounded-lg " style={{background : `url(${bg})`,  backgroundRepeat: 'no-repeat'}}/>
          
          </div>
        </div>
      </div>
        </div>
    </div>
    </>
  )
}
