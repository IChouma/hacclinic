import React, {Fragment, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Contact.css'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
function  Contact() {
  const [active,setActive]=useState(false);
  const [ipCountry,setIpCountry]=useState("tr");
// const ContactUs=useNavigate()
// const home=useNavigate()
const [phone, setPhone] = useState('');
// useEffect(() => {
//   axios.get(`https://ipinfo.io/json?token=42ed2540310f93`)
//   .then(response => {
//     setIpCountry(response.data.country)
//     console.log(response.data.country)
//     console.log(`${ipCountry}--no`);
//   })
//   .catch(e => {
//     setIpCountry("TR")
//   });
// }, []);
    return (
   <section class="contact" id="contact">

    <h1 class="heading"> CONTACT US</h1>

    <div class="row">

        <form action="">
            <h3>enter your information </h3>
            <div class="inputBox">
                    <div>
                        <PhoneInput
                        defaultCountry={"tr"}
                        forceDialCode={true}
                        showDisabledDialCodeAndPrefix={true}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        />
    </div>
            </div>
            <div class="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="Name"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="Email"/>
            </div>
            <input type="submit" value=" Send" class="btn"/>
        </form>

    </div>

</section>
    
  )
}


export default Contact


