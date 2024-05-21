"use client";
import { memo, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../styles/header.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = memo(function Header() {
  const [icon, seticon] = useState(false);

  return (
    <div className="bg-[#0b0b0b]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex  justify-between py-4 w-[90%] m-auto rounded-bl-3xl rounded-br-3xl px-7 border border-gray-500    items-center bg-[#424242] text-white "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -170 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className=" w-24 h-auto hidden lg:block "
        >
          <Image
            alt="logo"
            src="/assets/Images/logo.png"
            width={96}
            height={96}
            className="w-full h-full "
          />
        </motion.div>

        <div className="flex items-center justify-between w-full z-[999999999999999] lg:w-[70%]">
          <ul
            className={icon ? "menu active" : "menu"}
            onClick={() => seticon(!icon)}
          >
            <motion.li
              initial={{ opacity: 0, scale: 0.5, y: 70 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" onClick={() => seticon(!icon)} className="text-white">
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5, y: 70 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#discover"
                onClick={() => seticon(!icon)}
                className="text-white"
              >
                Discover
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5, y: 70 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a onClick={() => seticon(!icon)} className="text-white">
                MarketPlace
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.5, y: 70 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a onClick={() => seticon(!icon)} className="text-white">
                Gaming
              </a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, scale: 0.5, y: 70 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a onClick={() => seticon(!icon)} className="text-white">
                About Us
              </a>
            </motion.li>
          </ul>
          <motion.button
            initial={{ opacity: 0, scale: 0.5, x: 70 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="w-24 lg:w-[175.48px] h-8 bg-blue-color rounded-[6px] text-white"
          >
            Log in
          </motion.button>
        </div>

        <div className="menu__icon md:hidden">
          <span
            className="Header__icon text-white"
            onClick={() => seticon(!icon)}
          >
            {!icon ? (
              <FaBars className="text-white" />
            ) : (
              <FaTimes className="text-white" />
            )}
          </span>
        </div>
      </motion.div>
    </div>
  );
});

export default Header;
