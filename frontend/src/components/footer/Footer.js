import React from "react";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { whiteLogo } from "../../assets/assets";

function Footer() {
  return (
    <footer className="bg-white mt-12 dark:bg-black border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-1 py-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-center">
          <a href="#">
            <img
              src={whiteLogo}
              className="h-14 w-auto object-contain cursor-pointer"
              alt="Logo"
            />
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <CiFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <CiInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <CiYoutube size={24} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <CiTwitter size={24} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          © 2025{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline font-semibold"
          >
            PetPlace
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
