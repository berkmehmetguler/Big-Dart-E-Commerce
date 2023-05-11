import React from "react";
import Image from "next/image";
import Link from "next/link";

import Carousel2 from "../assets/Carousel-Item2.jpg";

import Slider1 from "../assets/slider-kasim-4.jpeg";

import Slider2 from "../assets/slider-kasim-6.jpeg";
import Slider3 from "../assets/slider-kasim-7.jpeg";
import Slider4 from "../assets/slider-kasim-8.jpeg";
import Slider5 from "../assets/slider-kasim-55.jpeg";
import Slider6 from "../assets/slider-kasim-99.jpeg";
import Slider7 from "../assets/slider-kasim-100.jpeg";

const HeroBanner = () => {
  return (
    <section>
      <div className="flex mb-4">
        <div className="grid gap-8 mx-auto container ">

            <Link href="/enyeniler">
              <Image
                src={Carousel2}
                alt="Carousel2"
                className="md:h-full h-96 w-full rounded"
              />
            </Link>
  

          {/* <div className="flex flex-row gap-4">

            <div className="flex flex-col w-1/2">
              <Link href="ceket">

                <Image src={Carousel1} alt="ceket"/>
              </Link>
            </div>
            <div className="flex flex-col w-1/2">
              <Link href="mont">
                <Image src={ Carousel3} alt=" mont"/>
                </Link>
            </div>
          </div> */}

          <div className="grid grid-cols  md:grid-cols-3 h-full gap-4" >

              <Link href="/giyim/ceket">
                <Image src={Slider1} alt="ceket" className="h-full  rounded w-full" />
              </Link>

              <Link href="giyim/kaban">
                <Image src={Slider2} alt=" mont" className="h-full rounded w-full" />
              </Link>


              <Link href="giyim/trenckot">
                <Image src={Slider6} alt=" mont" className="h-full rounded w-full" />
              </Link>
          </div>



              <Link href="/aksesuar" className="">
                <Image src={Slider4} alt=" mont" className="md:h-full h-96 w-full" />
              </Link>


            <div className="grid grid-cols  md:grid-cols-3 h-full gap-4" >

              <Link href="/giyim/mont">
                <Image src={Slider5} alt="ceket" className="h-full rounded w-full" />
              </Link>

              <Link href="/giyim/yelek">
                <Image src={Slider3} alt=" mont" className="h-full rounded w-full" />
              </Link>


              <Link href="/giyim/kazak">
                <Image src={Slider7} alt=" mont" className="h-full rounded w-full" />
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
