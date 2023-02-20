import React from "react";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="home__social">
        <button class="btn">
          <div class="scroll"> </div>
        </button>
      </div>
    </motion.div>
  );
};

export default Social;
