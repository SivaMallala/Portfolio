import React from 'react'
import Link from 'next/link';

import { FaFileDownload } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="m-8 antialiased flex gap-2 justify-between px-2 sm:px-10 items-center">
      <li className="list-none text-white w-fit cursor-pointer">
        <Link href="/">
          <span className="  font-semibold  flex items-center">
            {"<Siva_Chandu/>".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-[#00c7ff] sm:text-xl text-lg hover:text-2xl hover:-mt-2 transition-all duration-500 hover:duration-100 ">
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <li className="list-none h-fit ">
  <a
    href="../Siva Chandu Mallala.pdf"
    download="Siva Chandu Mallala"
    target="_blank"
    className="relative inline-block px-2 py-1  font-semibold text-[#000435] group"
  >
    <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#00c7ff] group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
    <span className="absolute inset-0 w-full h-full border-4 border-white rounded-md"></span>
    <span className="relative flex items-center space-x-2 p-1">
      <FaFileDownload />
      <p className="font-semibold hidden  sm:block text-lg ">Resume</p>
    </span>
  </a>
</li>

    </nav>
  )
}

export default Navbar