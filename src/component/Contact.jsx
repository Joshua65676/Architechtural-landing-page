import React from "react";
import { Link } from "react-router-dom";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact(){
    return(
        <footer>
            <div class="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 mb-8 md:space-y-0 md:flex-row">
             <div class="flex flex-col  space-y-12 md:w-1/2">
                <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Contact</h1>
                 {/* Address */}
                 {/* <h2 class="">Address</h2> */}
                <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Urobach Architecture Constructions, ifite-Awka Anambra, Nigeria.
                 </p>
             </div> 
                {/* constact */}
              <div class="flex justify-between space-x-5 p-10 items-end md:text-right">
                    <Link to=""> <FaSquareWhatsapp size="3rem" /> <p class="text-darkGrayishBlue">WhatsApp</p></Link>
                    <Link to="Mailto:urobach23@gmail.com"> <BiLogoGmail size="3rem"/> <p class="text-darkGrayishBlue">Email</p> </Link>
                    <Link to=""> <FaSquareXTwitter size="3rem"/><p class="text-darkGrayishBlue">Twitter</p></Link>
                    <Link to=""> <AiFillLinkedin size="3rem" /><p class="text-darkGrayishBlue">Linkedin</p></Link>
              </div>
                {/* Message */}
            </div>
            <div class="p-1 px-3 text-blue-950 bg-blue-400 rounded baseline hover:bg-blue-300 text-2xl font-bold  text-center">
                    <h1>...we give nothing but the best.</h1>
              </div>
        </footer>
    )
}