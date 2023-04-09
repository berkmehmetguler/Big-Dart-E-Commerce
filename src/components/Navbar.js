import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import { FiHeart, FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <header className="border-b shadow-md">
      <div className="text-center text-white shadow-md text-sm md:text-md text-bold font-medium bg-black">
        <div className=" grid grid-cols-2 lg:grid-cols-3">
          <Link href="/">200 TL UZERI KARGO UCRETSIZ</Link>
          <Link href="/">TUM URUNLERDE SEZON BOYU INDIRIM</Link>
          <div className="grid-cols-2 hidden mx-auto lg:flex space-x-10">
            <Link href="/">+90 506 153 34 47</Link>
            <Link href="/">Kargom Nerede ?</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-3 flex justify-between">
        <div className="burger-menu lg:hidden items-center flex mx-4 gap-4 ">
          <RxHamburgerMenu size={25} className="cursor-pointer" />
          <AiOutlineSearch size={25} className="cursor-pointer" />
        </div>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Brand Logo" width={120} />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-8 items-center uppercase">
            <li className=" mx-auto transition-all ease-in-out">
              <Link className=" shadow-md text-lg" href="/">
                En Yeniler
              </Link>
            </li>
            <li className=" mx-auto transition-all ease-in-out hover:border-b-2 ">
              <Link className=" shadow-md text-lg uppercase" href="/giyim">
                Giyim
              </Link>
            </li>
            <li className=" mx-auto transition-all ease-in-out hover:border-b-2 ">
              <Link className=" shadow-md text-lg" href="/teseddur">
                Teseddur Giyim
              </Link>
            </li>
            <li className=" mx-auto transition-all ease-in-out hover:border-b-2 ">
              <Link className=" shadow-md text-lg" href="/yeni">
                Aksesuar
              </Link>
            </li>
            <li className=" mx-auto transition-all ease-in-out hover:border-b-2 ">
              <Link className=" shadow-md text-lg" href="/firsat">
                Firsat Urunler
              </Link>
            </li>
          </ul>
        </nav>

        <div className="navbar-icons flex items-center mx-4 gap-4">
          <AiOutlineSearch
            size={25}
            className="cursor-pointer hidden lg:flex"
          />
          <FiUser size={25} className="cursor-pointer hidden lg:flex" />
          <FiHeart size={25} className="cursor-pointer" />
          <BiBasket size={25} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
