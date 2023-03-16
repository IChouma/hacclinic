import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './header.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brand1 from "./logo-01.png"
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FcManager } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { RiMessage2Line } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
function  Header() {
      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOver=()=>{
    console.log("yes");
  }
    const [active,setActive]=useState(false)
    const [search,setSearch]=useState(false);
    const navigate= useNavigate()
    return (
   <header class="header">

    <a href="/" class="logo">
        <img src={Brand1} alt=""/>
    </a>

    <nav class={`navbar ${active===true?"active":""}`}>
        <ul>
            <li><div className='drop'>    <a href="#">Home</a> 
            <AiOutlineHome className='icon' style={{color: '#ffffff', fontSize: '25px'}}/></div></li>
            <li><div className='drop'>    <a href="#">About</a> 
            <BsInfoCircle className='icon' style={{color: '#ffffff', fontSize: '25px'}}/></div></li>
            <li>
                <div className='drop'>    <a href="#">Men services</a> <RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/>
            <FcManager style={{color: '#ffffff', fontSize: '25px'}}/></div>
            
            <ul class="name">
              <li><a href="#">Hair,Beard transplantaion</a>
            </li>
              <li><div className='drop'>  <a href="#">THEETH</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">HOLLYWOOD SMILE</a></li>
                    <li><a href="#">DENTAL IMPLANTS</a></li>
                </ul>
            </li>

              <li><a href="#">RHINOPLASTY</a>
            </li>

              <li><div className='drop'>  <a href="#">BEAUTIFICATION OF FACE</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">FORHEAD LIFT</a></li>
                    <li><a href="#">EYEKID LIFT</a></li>
                    <li><a href="#">FACELIFT </a></li>
                    <li><a href="#">EAR PULLING </a></li>
                    <li><a href="#">NECK LIFT </a></li>
                </ul>
            </li>
            <li><a href="#">LIPOSUCTION </a></li>


            <li><div className='drop'>  <a href="#">SLIMING OPERATIONS</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">GASTRIC BALLON</a></li>
                    <li><a href="#">GASTRIC SLEEVE</a></li>
                    <li><a href="#">STOMACH BOTOX</a></li>
                    <li><a href="#">LIFTING,SUCTIONING THE THIGHS</a></li>
                </ul>
            </li>

              <li><a href="#">GYNECOMASTIA REMOVAL</a>
            </li>
              <li><a href="#">BODY SCULPTING</a></li>
              <li><a href="#">HANDS UP</a></li>
              <li><a href="#">LIFTING,SUCTIONING THE THIGHS</a></li>
            </ul>
            </li>
            <li>
              <div className='drop'><a href="#">Women services</a>
              <RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/>
            <FcBusinesswoman style={{color: '#ffffff', fontSize: '25px'}}/>
            </div>
            <ul class="name">
              <li><div className='drop'>  <a href="#">hair transplantation</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">hair translplant</a></li>
                    <li><a href="#">eyebrow transplantaion</a></li>
                </ul>
            </li>
              <li><div className='drop'>  <a href="#">theeth</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">hollywood smile</a></li>
                    <li><a href="#">dental implants</a></li>
                </ul>
            </li>
              <li><a href="#">RHINOPLASTY</a>
            </li>
              <li><div className='drop'>  <a href="#">Face BEAUTIFICATION</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">forehead lift</a></li>
                    <li><a href="#"> Eyelid lift</a></li>
                    <li><a href="#"> face lift</a></li>
                    <li><a href="#">Neck lift</a></li>
                    <li><a href="#">Ear pulling</a></li>
                    <li><a href="#">Cat eyes</a></li>
                    <li><a href="#">Raising eyebrows</a></li>
                </ul>
            </li>
              <li><a href="#">Liposuction</a>
            </li>
              <li><div className='drop'>  <a href="#">Slimmming Operations</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">Gastric Ballon</a></li>
                    <li><a href="#">Gastric Sleeve</a></li>
                    <li><a href="#">Stomach Botox</a></li>
                </ul>
            </li>
              <li><div className='drop'>  <a href="#">Breast Augmentation</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">Chest Thightening</a></li>
                    <li><a href="#"></a>Breast Augmentation</li>
                    <li><a href="#">Breast Reductoin</a></li>
                </ul>
            </li>
              <li><div className='drop'>  <a href="#">Abdominoplasty</a><RiArrowDropDownLine style={{color: '#ffffff', fontSize: '25px'}}/></div>
                <ul class="topic">
                    <li><a href="#">Body Sculpting</a></li>
                    <li><a href="#"></a>Tummy Tuck</li>
                </ul>
            </li>
            <li><a href="#"> Hands Up</a></li>
            <li><a href="#"> Lifting, Thighs Suctionning</a></li>
            <li><a href="#">Buttick Augmentation</a></li>
            <li><a href="#"> Special Cosmetic Procedures</a></li>
            </ul>
            </li>
            <li><div className='drop'>  <a href="#">Contact</a><RiMessage2Line className='icon'  style={{color: '#ffffff', fontSize: '25px'}}/></div></li>
        </ul>
    
   
    <div>
    </div>
    </nav>

<div className='send'>
    <BsFacebook style={{color: '#ffffff', fontSize: '25px'}}/>
    <BsTwitter style={{color: '#ffffff', fontSize: '25px'}}/>

</div>
    <div class="icons">
        <div class="fas fa-bars" id="menu-btn" 
        onClick={()=>setActive(!active)}
        ></div>
    </div>


</header>

    
  )
}


export default Header


