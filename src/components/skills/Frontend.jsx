import React from "react";
import { motion } from "framer-motion";

const Frontend = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [-250, 0], opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>
        <span className="skills__subtitle">
          This is my passion &nbsp;<i className="bx bxs-heart"></i>
        </span>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxl-html5"></i>
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Itermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-css3"></i>
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Itermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-tailwind-css"></i>
              <div>
                <h3 className="skills__name">TailwindCSS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-javascript"></i>
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-git"></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxl-react"></i>
              <div>
                <h3 className="skills__name">ReactJS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;
