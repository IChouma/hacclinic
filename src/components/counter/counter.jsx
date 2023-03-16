import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {cart} from '../../cart-slice'
import { MdOutlineAddHomeWork } from "react-icons/md";
import './counter.css';
import  CountUp from "react-countup";
import  ScrollTrigger from "react-scroll-trigger";

function Counter({services}) {
    const [counterOn,setCounterOn]=useState(false)
    const dispatch=useDispatch();
    const navigate=useNavigate ();
    const servicess=services.map((service,index)=>{
        return(
            <div class="box" onClick={()=>{dispatch(cart(service));navigate('/product')}}>
            <div className="image ">
               <div> <MdOutlineAddHomeWork className='image-icon' style={{color: '#000', fontSize: '5rem'}}/></div>
            </div>
            <div class="content">
                <h1 >
                    {counterOn && <CountUp preserveValue={false} star={0} end={200} duration={4} delay={1} />}
                    </h1>
                <h3>{service.title}</h3>
               

            </div>
        </div>
        )
    })
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} >
<section class="products" id="counter">

    <h1 class="heading" data-goal="500">Our Services </h1>

    <div class="box-container">
        {servicess}
    </div>
</section>
</ScrollTrigger>
  )
}

export default Counter
