"use client";
import { memo } from "react";
import BaryaMetaCard from "./barya-meta-card";
import { motion } from "framer-motion";

const BayraMeta = memo(function BayraMeta() {
  return (
    <div className=" bg-[#2E2D2E] rounded-2xl  text-white p-8 mt-6 z-[-99999]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, x: -170 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[36px] font-[700]"
      >
        BayraMeta
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5, y: 70 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[16px] leading-[20px] text-[#7B7B7B] font-[600px] text-justify"
      >
        BayraMeta World is P2E Metaverse, with the underground FennecVerse only
        for VIP NFT Owners like fennecs and Upper World for HunterX collections(
        Blops) & Proton/ ETH approved collections.. We bring exciting games in
        which you can earn XPR, Bayra whilst existing in the ecosystem. Racing,
        Shooting, Fighting and other multiplayer games for our VIP users.
        Concerts and Brand Advertisements for our corporate partners.
      </motion.p>
      <BaryaMetaCard />
    </div>
  );
});

export default BayraMeta;
