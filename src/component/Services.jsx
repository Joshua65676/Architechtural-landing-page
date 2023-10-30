import React from "react";

export default function Services(){
    return(
       <section>
         <div class="relative container mx-auto space-y-5" >
         
            <h1 class="p-4 px-6 pt-2 text-blue-950 bg-blue-400 rounded baseline hover:bg-blue-300 text-4xl font-bold text-center "
            >
                Our Professional Services
            </h1>
        {/* <div class="">   */}
            <div class=" p-8 py-8 space-x-10 space-y-10 rounded bg-veryLightGray md:w-1/1 grid grid-auto-fit-xl">
            <div
            class="flex flex-col space-y-3 rounded gb-blue-400 md:space-y-0 md:space-x-6 p-8 md:flex-row"
          >
            {/* heading */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  3D Drawings
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                3D Drawings
              </h3>
              <p class=" text-darkGrayishBlue">
              Our 3D drawing services cover a wide spectrum, including architectural renderings, product modeling, interior design visualization,
              and more. We help clients see their concepts in a tangible and immersive way.
              </p>
            </div>
          </div>

          {/* list 2 */}
            
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Architectural Drawings
                </h3>
              </div>
            </div>
  
            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Architectural Drawings
              </h3>
              <p class="text-darkGrayishBlue text-sm">
              Our architecture drawing services encompass a wide range of offerings,
              including architectural blueprints, construction drawings, 3D renderings, and site plans.
              We're your trusted partner in the design and planning process.
              </p>
            </div>
          </div>

          {/* list 3 */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Building Services
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Building Services
              </h3>
              <p class="text-darkGrayishBlue text-sm">
              Our building services cover a wide spectrum, including routine maintenance, repairs, renovations, and even new construction.
              We provide end-to-end solutions for your building projects.
              </p>
            </div>
          </div>

          {/* list 4 */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  04
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Building Constructions
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Building Constructions
              </h3>
              <p class="text-darkGrayishBlue text-sm">
              Our building construction services cover a wide range of projects, including residential and commercial construction, renovations, remodeling,
              and new construction. We are your one-stop solution for all your construction needs.
              </p>
            </div>
          </div>

            {/* list 5 */} 
            <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div
                    class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                  >
                    05
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Building Renovations
                  </h3>
                </div>
              </div>
  
              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Building Renovations
                </h3>
                <p class="text-darkGrayishBlue text-sm">
                Our building renovation services encompass a wide spectrum, including interior and exterior renovations,
                remodeling, restoration, and adaptive reuse projects. We are your trusted partner in giving your space a fresh and contemporary look.
                </p>
              </div>
            </div>

              {/* list 6 */}

              <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  06
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Interior Desings
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Interior Desings
              </h3>
              <p class="text-darkGrayishBlue text-sm">
              Our interior design services include personalized consultations, space planning, color palette creation, furniture and decor selection,
               and comprehensive project management. Whether you need a full home makeover or a single-room facelift, we have you covered
              </p>
            </div>
          </div>
            </div>
        </div>
       </section>
    )
}