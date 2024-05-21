"use client";
import BaryaData from "@/config/barya-data";
import "../styles/card.css";
import { motion } from "framer-motion";

const BaryaMetaCard = () => {
  return (
    <div className=" grid md:grid-cols-2  lg:grid-cols-3 mt-12 justify-center gap-8">
      {BaryaData.map((it) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 170 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" h-[60vh] px-6 rounded-[50px] flex flex-col gap-y-3 linear text-white relative"
            key={it.id}
          >
            <div className="">
              <h1 className="text-xl font-bold text-center py-4">{it.title}</h1>
              <p className="text-white text-sm py-2">{it.details}</p>
              <button
                type="button"
                className="bg-[#BF08DE] w-full h-[45px] 6 rounded-[14px] text-[12px] absolute bottom-1 left-0"
              >
                Read more
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BaryaMetaCard;
