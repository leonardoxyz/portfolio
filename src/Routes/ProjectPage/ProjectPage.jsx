import React from "react";
import { projects } from "../../Data";
import "./ProjectPage.css";
import { useParams } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <>
      <div className="pPage-back">
        <Link to="http://leonardo.vercel.app">
          <button>
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <div className="pPage-background">
        <img src={project.background} alt="" />
      </div>

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
              <button>
                DEMO
                <BiRocket />
              </button>
            </Link>
            <Link to={project.repo}>
              <button>
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
