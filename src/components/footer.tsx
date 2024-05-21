"use client";
import { memo } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = memo(function Footer() {
  return (
    <div className="md:h-[50vh] flex flex-col items-center md:items-end md:flex-row gap-y-4 py-6 md:py-0 justify-between w-full bg-blue-600 mt-4 rounded-[40px] px-8">
      <div className="w-full md:w-1/2 sm:flex items-center h-full justify-between text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -170 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-[#2E2D2E] h-[12rem] px-3 sm:w-1/2 rounded-3xl flex items-center flex-col justify-center gap-y-4 text-white"
        >
          <Image
            className="h-[3rem] w-[3rem]"
            alt="logo"
            width={100}
            height={50}
            src="/assets/Images/icons.png"
          />
          <p className="text-sm sm:text-center ">
            Bayra is a multi-purpose platform revolutionizing the NFT space by
            combining NFTs, DeFi, and gaming.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 170 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <ul className="flex flex-col items-center gap-y-2 text-xl">
            <li className="cursor-pointer hover:scale-110 duration-300 hover:drop-shadow-md">
              Home
            </li>
            <li className="cursor-pointer hover:scale-110 duration-300 hover:drop-shadow-md">
              Discover
            </li>
            <li className="cursor-pointer hover:scale-110 duration-300 hover:drop-shadow-md">
              Marketplace
            </li>
            <li className="cursor-pointer hover:scale-110 duration-300 hover:drop-shadow-md">
              Gaming
            </li>
            <li className="cursor-pointer hover:scale-110 duration-300 hover:drop-shadow-md">
              About Us
            </li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 170 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 text-white flex flex-col justify-end pb-12 items-center "
      >
        <h1 className="text-xl font-semibold pb-6">Our Social Media</h1>
        <div className="flex items-center gap-x-2">
          <p className="text-2xl rounded-full p-2 bg-white text-black shadow-md shadow-primary hover:rotate-3 transition-all .6 hover:scale-110 cursor-pointer">
            <BsTwitter />
          </p>
          <p className="text-2xl rounded-full p-2 bg-white text-black shadow-md shadow-primary hover:rotate-3 transition-all .6 hover:scale-110 cursor-pointer">
            <BsInstagram />
          </p>
          <p className="text-2xl rounded-full p-2 bg-white text-black shadow-md shadow-primary hover:rotate-3 transition-all .6 hover:scale-110 cursor-pointer">
            <BiLogoTelegram />
          </p>
          <p className="text-2xl rounded-full p-2 bg-white text-black shadow-md shadow-primary hover:rotate-3 transition-all .6 hover:scale-110 cursor-pointer">
            <FaFacebookF />
          </p>
          <p className="text-2xl rounded-full p-2 bg-white text-black shadow-md shadow-primary hover:rotate-3 transition-all .6 hover:scale-110 cursor-pointer">
            <BsYoutube />
          </p>
        </div>
      </motion.div>
    </div>
  );
});

export default Footer;
