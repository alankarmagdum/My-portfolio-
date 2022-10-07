import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        Alankar <font color="yellow">Magdum</font>
      </motion.div>
      <motion.div
        class="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <font>Frontend</font> Developer and <font>good</font> programmer with hands-on experience.
      </motion.div>
    </div>
  );
};

export default Home;
