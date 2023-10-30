import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function SideNavBar(){
    
    const [open, setOpen] = useState(false);

    const showSideBar = () => setOpen(!open);

    return(
        <div class="md:hidden focus:outline-none">
          <Link to="#" class="menu-bars">
            <AiOutlineMenu onClick={showSideBar}/>
          </Link>
          {/* navBarMenu */}
          <nav className={open ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSideBar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiOutlineClose />
              </Link>
            </li>
             <li class="nav-text font-bold">
               <a class="hover:text-blue-400"  href="#">About</a>
               <a class="hover:text-blue-400"  href="#">Services</a>
               <a class="hover:text-blue-400"  href="#">Project</a>
               <a class="hover:text-blue-400"  href="#">Contact</a>
             </li>
            
          </ul>

          </nav>
        </div>
    )
}