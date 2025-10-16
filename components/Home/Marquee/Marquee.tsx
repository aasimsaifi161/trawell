"use client"
import React from 'react'
import { motion } from 'motion/react';

type Props = {
  imagesurl: string[]
  direction: string
}

const Marquee = ({ imagesurl, direction }: Props) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        className="flex flex-shrink-0 gap-15 md:py-8 py-4 pr-10"
      >
        {imagesurl.map((url, index) => (
          <img alt='News Companies' key={index} className="md:h-10 h-6" src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        className="flex flex-shrink-0 gap-15 md:py-8 py-4 pr-10"
      >
        {imagesurl.map((url, index) => (
          <img alt='News Companies' key={index} className="md:h-10 h-6" src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee