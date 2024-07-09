"use client";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Tech = ({ item, direction }:any) => {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 160, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {item.map((tech: string, index: number) => (
          <div className="text-xl font-bold  " key={index}>{tech}</div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 160, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {item.map((tech: string, index: number) => (
          <div className="text-xl font-bold  " key={index}>{tech}</div>
        ))}
      </motion.div>
    </div>
  );
};


export default Tech;
