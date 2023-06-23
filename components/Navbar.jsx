'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%]  inset-0 gradient-01 -z-10" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <a href='https://github.com/ARITRA69' target="_blank">
        <img 
          src="/github-mark-white.svg" 
          alt="github" 
          className="w-[34px] h-[34px] object-contain hover:cursor-pointer"
        />
      </a>
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
      Enter the METAVERUS
      </h2>
      <img 
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
