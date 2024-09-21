import React from 'react';
import { motion } from 'framer-motion';

const HighlightText = ({ children, className }) => {
  return (
    <motion.div className={`relative inline-block ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-white mix-blend-difference"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{
          scaleX: [0, 1, 1, 0],
          originX: [0, 0, 1, 1],
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default HighlightText;