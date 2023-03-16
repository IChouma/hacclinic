import React from 'react';
import { useState } from 'react';
import './Footer.css'

function Footer(){
  return (

<section class="footer">

    <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
        <a href="#" class="fab fa-pinterest"></a>
    </div>

    <div class="links">
        <a href="/">الرئيسية</a>
        <a href="#about">من نحن</a>
        <a href="#menu">القائمة</a>
        <a href="#products">المنتجات</a>
        <a href="#review">التقييمات</a>
        <a href="#contact">اتصل بنا</a>
        {/* <a href="#">blogs</a> */}
    </div>

    <div class="credit">created by <span>codechouma</span> | all rights reserved</div>

</section>

  )
}



export default Footer;

