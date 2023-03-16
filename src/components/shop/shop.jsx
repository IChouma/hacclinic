import React, { Fragment, useEffect,  } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import "./shop.css"
import f1 from './media/f1.jpg';
import star from './media/star.png'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {selectCart} from '../../cart-slice'

function Shop () {
const cartt = useSelector(selectCart);
useEffect(() => {
window.scrollTo(0,0)
}, );
  return (
  <Fragment>
    <Header/>
    <section  id="prodetails" className="section">
      <div className="sproimg">
        <img src={cartt.img} width="100%" alt="" id="mainimg"/>
      </div>
      <div className="sprodetails">
        <h6>{cartt.title}</h6>
        <h2>د.م  {cartt.price}</h2>
        <h4>{cartt.description}</h4>
        <button key={Math.random()} 
        className="btn btn-primary buybtn"
            onClick={()=>window.open(`https://wa.me/+212629852903?text= Salut! \nj'ai vu ceci (${cartt.title}) sur votre website`,'_blank').focus()}
        >للطلب عبر الواتساب</button>
        <h4>نفاصيل المنتج</h4>
        <p className='detailss'>{cartt.details}</p>
      </div>
    </section>
    <Footer/>
  </Fragment>
  )
}

export default Shop;

