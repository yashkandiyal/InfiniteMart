import React from "react";
import { Instagram, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center mt-[15.5rem] rounded-t-lg shadow-md">
      <div className="flex justify-center gap-11 space-x-4">
        <motion.a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#E1306C" }}
        >
          <Instagram style={{ fontSize: "40" }} />
        </motion.a>
        <motion.a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#1DA1F2" }}
        >
          <Twitter style={{ fontSize: "40" }} />
        </motion.a>
        <motion.a
          href="https://github.com/yashkandiyal?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            backgroundColor: "#211F1F",
            color: "#FFFFFF",
            borderRadius: "50%",
          }}
        >
          <GitHub style={{ fontSize: "40" }} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yash-kandiyal-707a422a0/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0E76A8" }}
        >
          <LinkedIn style={{ fontSize: "40" }} />
        </motion.a>
      </div>
      <p className="mt-10 text-gray-400">&copy; 2024 InfiniteMart</p>
    </footer>
  );
};

export default Footer;
