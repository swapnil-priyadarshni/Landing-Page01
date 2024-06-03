import React from 'react'

export default function Footer() {
  return (
    <>
    <div>
    <footer className="footer p-10 bg-base-200 text-base-content ml-10">
  <aside>
    <img src="/images/logo.png" alt="" />
    <p className='flex'><img src="/images/email.png" alt=""/><span className='ml-3'>Help@frybix.com</span></p>
    <p className='flex'><img src="/images/phone.png" alt="" /><span className='ml-3'>+1 234 456 678 89</span></p>
  </aside> 
  <nav>
    <h6 className="footer-title">Links</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Booking</a>
    <a className="link link-hover">Blog</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms Of Use</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie Policy</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title">Product</h6> 
    <a className="link link-hover">Take Tour</a>
    <a className="link link-hover">Live Chat</a>
    <a className="link link-hover">Review</a>
  </nav>
  <nav>
    <h6 className="footer-title">Newsletter</h6> 
    <a className="link link-hover">Stay Up to Date</a>
    <a className="btn bg-black text-white hover:bg-red-600 p-10 py-5 m-7 mr-10">Subscribe </a>
  </nav>
</footer>
<br />
<hr />
<footer className="footer footer-center p-4 bg-base-300 text-base-content m-10">
  <aside>
    <p>Copyright © 2022 - Uifry.Com All right reserved</p>
  </aside>
</footer>
    </div>
    </>
  )
}
