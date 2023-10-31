import React from "react";
import { Link } from "react-router-dom";
import SideNavBar from "./SideNavBar";
// import { useState } from "react";
// import About from "./About";

export default function Navbar(){
   // const [open, setOpen] = useState(true);
   // const handleClick = () =>{
   // //   setMenu(document.getElementById("menu-btn").value);
   // //   setMenu(document.getElementById("menu").value);
   //    setOpen("open");
   // }
    return(
        <div>
        <div class="flex justify-between relative container mx-auto p-6 border-b-8 border-blue-500">
             <Link  to="/" class="w-28 p-5"><img src="src/image/urobach-logo.jpg" alt="logo" /></Link>
          <nav class="hidden md:flex space-x-8 p-8">
             <Link class="hover:text-blue-400 text-xl font-bold" to="/about">About</Link>
             <Link class="hover:text-blue-400 text-xl font-bold" to="/services">Services</Link>
             <Link class="hover:text-blue-400 text-xl font-bold" to="/project">Project</Link>
             <Link class="hover:text-blue-400 text-xl font-bold" to="/contact">Contact</Link>
          </nav>
             <button class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</button>
         <SideNavBar />
        </div>
       </div>
    )
}