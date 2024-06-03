import React from 'react'
import bg from "../../public/images/bg.png"

export default function Features() {
  return (
    <>
    <div>
    <div className="hero min-h-screen bg-base-200">
        
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
        <h3 className='text-red-600 text-2xl font-bold'>Features</h3>
      <h1 className="text-7xl font-bold m-5">Uifry Premium</h1>

     <h2 className='text-2xl m-5'> <span>✧</span> Budgeting Intervals </h2><p className='m-5 text-xl'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
</p>
<h2 className='text-2xl m-5'> <span >⬡</span> Budgeting intervals </h2><p className='m-5 text-xl'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
</p>
<h2 className='text-2xl m-5'> <span>☐</span> Budgeting intervals </h2><p className='m-5 text-xl'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
</p>
      
    </div>
    <div className='frame-content'>
    <img src="/images/star.png" alt="" />
    <img src="/images/features.png" className=" frame1 max-w-xl rounded-lg " style={{background : `url(${bg})`, backgroundRepeat: 'no-repeat'}}/>
    
    </div>
  </div>
</div>
    </div>
    </>
  )
}
