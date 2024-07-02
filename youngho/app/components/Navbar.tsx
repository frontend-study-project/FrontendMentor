"use client";
import React, { useState } from "react";

import { BeakerIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    //   navbar goes here
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                <span className="font-bold">Home</span>
              </a>
            </div>

            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/features"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* secondary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3">
              Login
            </a>
            <a
              href="#"
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <LockClosedIcon className="w-6 h-6" />
              ) : (
                <BeakerIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={`${!menuToggle ? "hidden" : ""} md:hidden`}>
        <a
          href="/features"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>

        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Login
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
