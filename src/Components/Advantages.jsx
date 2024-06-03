import React from 'react'
import bg from "../../public/images/bg.png"

export default function Advantages() {
  return (
    <>
    <div>
    <div className="hero min-h-screen bg-base-200">
        
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='frame-content'>
          <img src="/images/star.png" alt="" />
          <img src="/images/adv.png" className=" frame1 max-w-xl rounded-lg " style={{background : `url(${bg})`,  backgroundRepeat: 'no-repeat'}}/>
          
          </div>
          <div>
              <h3 className='text-red-600 text-2xl font-bold'>Advantages</h3>
            <h1 className="text-7xl font-bold m-5">Why Choose Uifry?</h1>
            <h3 className='text-3xl flex'><img src="https://img.icons8.com/?size=100&id=TOto8b5mt0yT&format=png&color=000000" alt="" /> < span className='mt-7'> Clever Notifications </span></h3>
            <p className='m-5 text-xl'>
Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </div>
          
        </div>
      </div>
        </div></>
  )
}
