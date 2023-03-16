import React from 'react';
import { useNavigate } from 'react-router-dom';
import {cart} from '../../cart-slice'
import { useDispatch } from 'react-redux';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import './Menu.css'
function Menu({packs}) {
    const dispatch=useDispatch();
    const navigate=useNavigate ();
    packs.length=1
    const productss=packs.map((product,index)=>{
        return(
            <div  class="box offer" >
                <img src={product.img}></img>
        </div>
        )
    })
  return (
<section class="menu" id="menu">

    <h1 class="heading">Backs</h1>

    <div class="box-container">

{productss}



    </div>

</section>
  )
}

export default Menu
