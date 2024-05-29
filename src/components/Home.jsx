import React from 'react'
import '../styles/Home.css'
import { PiClockClockwiseLight } from "react-icons/pi";

function Home() {
  return (
    <div className='home'>
        <section>
            <img src='src/assets/Website-Homepage-Slider-May2024.jpg' alt='introduction'></img>
        </section>
        <section className='choose'>
          <div>
           <h1>Why Choose Us?</h1>
           <p>We’ve delivered more than 250,000 orders to over 15,000 customers</p>
           </div>
           <div className='us'>
           <div className='us1'>
            <img src='src/assets/groceries.jpg' alt='groceries'></img>
            <h2>Honestly Delicious Groceries</h2>
            <p1>From the everyday basics to Kenya's finest organic produce, all vetted for quality. Delicious. Healthy. Fresh.</p1>
           </div>
           <div className='us1'>
            <img src='src/assets/deliveries2.jpg' alt='deliveries2'></img>
            <h2>Great Prices</h2>
            <p1>We are 100% online, so no expensive shops! We offer you exceptional quality at prices you wouldn't expect!</p1>
           </div>
           <div className='us1'>
            <img src='src/assets/shopper3.jpg' alt='shopper3'></img>
            <h2>Simplify Your Life</h2>
            <p1>Never visit a shop again. Fast delivery with a smile & instant help-desk responses! Customers love us with an 4.7 star rating! Why wait?</p1>
           </div>
           </div>
        </section>
        <section className='our-products'>
          <div>
           <h1>Why Choose Our Products?</h1>
           <p>Over 3,500 delicious products, 100% vetted for quality and impact</p>
           </div>
           <div className='our'>
           <div className='our1'>
            <img src='src/assets/delicous1.jpg' alt='delicious1'></img>
            <h2>Delicious</h2>
            <p1>We taste-test everything we sell for the yumminess factor!</p1>
           </div>
           <div className='our1'>
            <img src='src/assets/products2.jpg' alt='products2'></img>
            <h2>Healthy</h2>
            <p1>The widest range of organic, everything safe, special diets or rare products: we got it all!</p1>
           </div>
           <div className='our1'>
            <img src='src/assets/fresh3.jpg' alt='fresh3'></img>
            <h2>Fresh</h2>
            <p1>We work directly with producers to get the freshest possible goodies delivered to you in tip-top condition.</p1>
           </div>
           </div>
        </section>
        <section className='get-us'>
          <div>
            <h1>How to get us!</h1>
          </div>
          <div className='how'>
            <div className='how1'>
              <img src='src/assets/get2-2.jpg' alt='get2'></img>
              <h2>Standard Delivery</h2>
              <p1>Order by midday and get your goodies the same day 365 days a year! Order after midday and get them the next day by 3pm.<br/><span><PiClockClockwiseLight style={{color: '#42a550'}}/> 6-12 Hours</span></p1>
            </div>
            <div className='how1'>
              <img src='src/assets/get1.jpg' alt='get1'></img>
              <h2>GreenspoonGo</h2>
              <p1>We deliver within 2 hours in Nairobi for orders before 7pm.<br/><span><PiClockClockwiseLight style={{color: '#42a550'}} /> under 99 Minutes</span></p1>
            </div>
            <div className='how1'>
              <img src='src/assets/get3-2.jpg' alt='get3'></img>
              <h2>Fargo</h2>
              <p1>We deliver next day, countrywide, with Fargo Courier. Place your order before midday.<br/><span><PiClockClockwiseLight style={{color: '#42a550'}} /> 24 Hours</span></p1>
            </div>
          </div>
        </section>
        
    </div>
  )
}

export default Home