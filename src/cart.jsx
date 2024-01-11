import React from 'react'
import './e-commerce'
import mac from './image/Rectangle 5.jpg'

const Cart = () => {
  return (
    <>
    
  <div class="container">
    <div class="product">
      <img  class="product img"src={mac} alt="Product Image"/>
      <h2>Mackbook Pro 2014</h2>
      <p><b>235,000 ugx</b></p>
      <p>MacBook Pro packs a powerful array of ports for connecting high-speed peripherals, driving high-resolution displays or directly offloading SDXC cards. And it supports both Wi-Fi 6E and Bluetooth 5.3. Drive external displays.
</p>
      
      <button onclick="addToCart()">Added to Cart</button>
    </div>
  </div>
    </>
  )
}

export default Cart
