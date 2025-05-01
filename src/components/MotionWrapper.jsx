import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/animations';

const MotionWrapper = ({ children, id, className = "" }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${className}`}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrapper; 