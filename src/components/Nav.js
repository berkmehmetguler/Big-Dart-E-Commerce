import React from "react";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex gap-4 items-center uppercase  ">
        <li className=" mx-auto transition-all ease-in-out tracking-wide">
          <Link
            className=" transition-all ease-in-out hover:border-b-2 hover:border-slate-300  text-lg uppercase"
            href="/enyeniler"
          >
            En Yeniler
          </Link>
        </li>
        <li className=" mx-auto  rounded-md  ">
          <Link
            className=" transition-all ease-in-out hover:border-b-2 hover:border-slate-300  text-lg uppercase"
            href="/giyim"
          >
            Giyim
          </Link>
        </li>
        <li className=" mx-auto  rounded-md  ">
          <Link
            className="  transition-all ease-in-out hover:border-b-2 hover:border-slate-300  text-lg"
            href="/teseddur"
          >
            Teseddur Giyim
          </Link>
        </li>
        <li className=" mx-auto  rounded-md  ">
          <Link
            className=" transition-all ease-in-out hover:border-b-2 hover:border-slate-300  text-lg"
            href="/aksesuar"
          >
            Aksesuar
          </Link>
        </li>
        <li className=" mx-auto  rounded-md  ">
          <Link
            className=" transition-all ease-in-out hover:border-b-2 hover:border-slate-300  text-lg"
            href="/firsat"
          >
            Firsat Urunler
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
