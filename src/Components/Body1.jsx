import React from 'react'
import bg from "../../public/images/bg.png"

export default function Body1() {
  return (
    <>
    <div>
    <div className="hero min-h-screen bg-base-200">
        
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
          <h3 className='text-3xl flex'><img src="https://img.icons8.com/?size=100&id=s2LPDFaS0y6C&format=png&color=000000" alt="" /> < span className='mt-7'> Fully Custiomizable </span></h3>
            <p className='m-5 text-xl'>
Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>

          </div>
          <div className='frame-content'>
          <img src="/images/star.png" alt="" />
          <img src="/images/body1.png" className=" frame1 max-w-xl rounded-lg " style={{background : `url(${bg})`}}/>
          
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
