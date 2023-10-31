import React from "react";

export default function About(){
    return(
         <section>
          <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            <div class="flex flex-col mb-10 space-y-12 md:w-1/2" >
               <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">About Me</h1>
               <p class="max-w-sm text-center text-darkGrayishBlue md:text-left" >
                Okoro Uche, a proud Nigerian architect, holds a Bachelor's degree in Architecture from Nnamdi Azikiwe University.
                With a career spanning over a decade, Uche has played a significant role in shaping the urban landscape of Nigeria.
                he has been the lead architect for various residential and commercial projects, including the prestigious Lagos Heights Tower, 
                which stands as a symbol of modernity. Uche dedication to sustainable architecture is evident in his work,
                as he continually seeks eco-friendly solutions for Nigeria's unique environmental challenges.
              </p>
            </div>
            <div class="rounded baseline md:w-1/2" >
                <img class="rounded-lg pb-5 md:rounded" src="./image/pexels-andrea-piacquadio-3771045.jpg" alt="image" />
            </div>
          </div>
         </section>
    )
}