import React from 'react'
import './Blog.css'
import img2 from '../../images/muskalghazal.jpeg';
import img3 from '../../images/muskalaswad.jpeg';
import img4 from '../../images/alodalkambodi.jpeg';


function Blog() {
  return (

    <section class="blogs" id="blogs">

    <h1 class="heading"> Our blogs </h1>

    <div class="box-container">

        <div class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">  </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">fhkjqhtz </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title"> title of blog </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">  </a>
                <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at porro suscipit? Beatae, quidem corrupti iste 
                </p>
                <a href="#" class="btn">read more </a>
            </div>
        </div>



    </div>

</section>
  )
}

export default Blog
