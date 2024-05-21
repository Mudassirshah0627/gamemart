"use client";
import Carddata from "@/config/card-data";
import "../styles/card.css";
import Image from "next/image";
import { memo } from "react";
import { BsFillSunriseFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Cards = memo(function Cards() {
  return (
    <div className="flex flex-wrap gap-y-4 justify-center gap-x-3">
      {Carddata.map((items) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -170 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative"
          key={items.id}
        >
          <div>
            <div className="absolute text-2xl text-green-100  -right-0  bg-blue-700 w-12 h-12 rounded-full m-auto ">
              <h1 className="flex items-stretch justify-center mt-3 ">
                <BsFillSunriseFill />
              </h1>
            </div>
          </div>
          <div className="w-64 h-72 clipPath  rounded-3xl   ">
            <Image
              width={200}
              height={100}
              alt="card"
              className="w-full h-full  rounded-3xl  "
              src={items.img}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
});
export default Cards;
