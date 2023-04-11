import React from "react";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import Carousel1 from "../assets/Carousel-Item.jpg";
import Carousel2 from "../assets/Carousel-Item2.jpg";
import Carousel3 from "../assets/Carousel-Item3.jpg";
import Carousel4 from "../assets/Carousel-Item4.jpg";
import Carousel5 from "../assets/Carousel-Item5.jpg";

const HeroBanner = () => {
  return (
    <section>
      <div classNameName="  flex">
        <div className="flex flex-col gap-8 mx-auto container">
          <Link href="/giyim">
            <Image
              src={Carousel2}
              alt="Carousel2"
              className="sm:h-full w-full rounded"
            />
          </Link>
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
