import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import LogoServe from "../assets/logoDart.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import { FiHeart, FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className="border-b mb-4">
      <div className="text-center text-white shadow-md text-sm  md:text-md font-bold bg-gray-900">
        <div className="hidden md:grid h-10 grid-cols-2 lg:grid-cols-3 text-[15px]  place-content-center">
          <Link href="/">200 TL UZERI KARGO UCRETSIZ</Link>
          <Link href="/">TUM URUNLERDE SEZON BOYU INDIRIM</Link>
          <div className="grid-cols-2 hidden mx-auto  lg:flex gap-4">
            <Link href="/">+90 506 153 34 47</Link>
            <Link href="/">Kargom Nerede ?</Link>
          </div>
        </div>
      </div>

        <div className="bottom-header"
        >

      <div className="container mx-auto my-3 flex font-medium text-dark  justify-between">
        <div className="burger-menu lg:hidden items-center flex mx-4 gap-4 ">
          <RxHamburgerMenu size={25} className="cursor-pointer" />
          <AiOutlineSearch size={25} className="cursor-pointer" />
        </div>

        <Link href="/">
          <Image src={LogoServe} alt="Brand Logo" width={200} className="" />
          {/* <Image src={Logo} alt="Logo" width={120} /> */}
        </Link>

        <Nav />

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

        </div>
    </header>
  );
};

export default Navbar;
