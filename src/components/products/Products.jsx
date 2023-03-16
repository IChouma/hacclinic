import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {cart} from '../../cart-slice'
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import './Products.css'
function Products({products}) {
        const dispatch=useDispatch();
    const navigate=useNavigate ();

    const productss=products.map((product,index)=>{
        return(
                    <div class="box" onClick={()=>{dispatch(cart(product));navigate('/product')}}>
            <div class="image">
                <img src={product.img} alt=""/>
            </div>
            <div class="content">
                <h3>{product.title}</h3>
               
            <a href="#" class=" buynow"
            onClick={()=>window.open(`https://wa.me/+212661771140?text= Salut! \nj'ai vu ceci (${product.title}) sur votre website`,'_blank').focus()}
            ></a>

            </div>
        </div>
        )
    })
  return (
<section class="products" id="products">

    <h1 class="heading">Our Services </h1>

    <div class="box-container">
        {productss}
    </div>

</section>

  )
}

export default Products
