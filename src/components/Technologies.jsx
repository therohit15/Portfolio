import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.java.com/en/">
            <RiJavaFill className="text-7xl text-[#f6971b]" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-7xl text-[#ffdf00]" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://react.dev/">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://nextjs.org/">
            <TbBrandNextjs className="text-7xl" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.mysql.com/">
            <TbBrandMysql className="text-7xl text-[#00638f]" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.mongodb.com/">
            <SiMongodb className="text-7xl text-green-500" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
