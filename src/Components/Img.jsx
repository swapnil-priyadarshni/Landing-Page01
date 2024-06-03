import React from 'react'
import bg from "../../public/images/bg.png"

export default function Img() {
  return (
    <>
    <div className='flex justify-center item-center m-10 ' style={{background : `url(${bg})`,backgroundRepeat: 'no-repeat'}}>

<img src="/images/img.png" alt="" />
    </div>
    </>
  )
}
