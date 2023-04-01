import React from "react";
import { projects } from "../../Data";
import "./ProjectPage.css";
import { useParams } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="pPage-back">
          <Link to="http://leonardo.vercel.app">
            <button className="cta-ppage">
              <BiArrowBack />
            </button>
          </Link>
        </div>
      </motion.div>

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
        <div className="pPage-background">
          <img src={project.background} alt="" />
        </div>
      </motion.div>
        <div className="pPage-container">
          <div className="pPage-project">
            <div className="pPage-logo">
              <img src={project.logo} alt="" />
            </div>

            <div className="pPage-title">
              <h1>{project.title}</h1>
            </div>
            <div className="pPage-desc">
              <h1>DESCRIÇÃO</h1>

              <div className="pPage-context">
                <span>{project.pDesc}</span>
              </div>
            </div>

            <div className="pPage-buttons">
              <Link to={project.demo}>
                <button className="pp-cta">
                  DEMO
                  <BiRocket />
                </button>
              </Link>
              <Link to={project.repo}>
                <button className="pp-cta">
                  REPO
                  <GoMarkGithub />
                </button>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProjectPage;
