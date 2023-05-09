import React from "react";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import Carousel1 from "../assets/Carousel-Item.jpg";
import Carousel2 from "../assets/Carousel-Item2.jpg";
import Carousel3 from "../assets/Carousel-Item3.jpg";
import Carousel4 from "../assets/Carousel-Item4.jpg";
import Carousel5 from "../assets/Carousel-Item5.jpg";

import Slider1 from "../assets/slider-kasim-4.jpeg";

import Slider2 from "../assets/slider-kasim-6.jpeg";
import Slider3 from "../assets/slider-kasim-7.jpeg";
import Slider4 from "../assets/slider-kasim-8.jpeg";

const HeroBanner = () => {
  return (
    <section>
      <div className="flex">
        <div className="grid gap-8 mx-auto container ">
          <div>
            <Link href="/giyim">
              <Image
                src={Carousel2}
                alt="Carousel2"
                className="sm:h-full w-full rounded"
              />
            </Link>
          </div>

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

              <Link href="ceket">
                <Image src={Slider1} alt="ceket" className="h-full  w-full" />
              </Link>

              <Link href="mont">
                <Image src={Slider2} alt=" mont" className="h-full  w-full" />
              </Link>


              <Link href="mont">
                <Image src={Slider3} alt=" mont" className="h-full  w-full" />
              </Link>
          </div>

            <div>

              <Link href="mont" className="">
                <Image src={Slider4} alt=" mont" className="h-auto  w-full" />
              </Link>
            </div>
          {/* <Link href="/giyim">
            <Image
              src={Carousel1}
              alt="Carousel2"
              className="h-full w-full rounded"
            />
          </Link> */}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default HeroBanner;
