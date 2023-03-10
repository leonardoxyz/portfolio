import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, repoLink } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="projects__card"
          >
            <div className="projects__img">
              <img src={img} alt="" />
            </div>

            <div className="projects__content grid" key={id}>
              <div className="projects__details">
                <h2>
                  {title}
                  <br />
                  <span>{description}</span>
                  <br />
                  {category}
                </h2>
                <div className="projects__btn">
                  <a href={repoLink} target="_blank">
                    <Link to={`/project/${id}`} style={{ color: "black" }}>
                      <button className="btn-project">See Project</button>
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
