import React from 'react';
import "./projects.css";
import "../../App.js";
import { useState } from 'react';
import AboutImg from "../../assets/profile.jpg";
import loginapp from "../../assets/MERN-loginapp.png";
import mh from '../../assets/mh.png'

const Projects = () => {

    let [dPortfolio, setNumber] = useState(0)
    function Add() {
        setNumber(dPortfolio + 1)
        document.getElementById("result").innerText = dPortfolio;
    }
    let [dStore, setNumberStore] = useState(0)
    function addStore() {
        setNumberStore(dStore + 1)
        document.getElementById("resultStore").innerText = dStore;
    }

    return (
        <section className="projects__section" id="projects">
            <h2 className="section__title">My Projects</h2>
            <span className="section__subtitle">A little about projects made by me</span>
            <div className="projects__container grid">

                <div className="projects__card">
                    <div className="projects__img">
                        <img src={AboutImg} />
                    </div>
                    <div className="projects__content grid">
                        <div className="projects__details">
                            <h2>Léo Santos - Portfolio<br /><span>This project is the same one that is selling now!</span></h2>
                            <div className="projects__data">
                                <h3>Views - <span id="result">{dPortfolio}</span></h3>
                            </div>
                            <div className="projects__btn">
                                <a href="https://github.com/Leonardoxyz" target={"blank"}><button onClick={Add}>See Project</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__img">
                        <img src={loginapp} />
                    </div>
                    <div className="projects__content grid">
                        <div className="projects__details">
                            <h2>MERN - Login APP<br/><span>Project for user registration.</span></h2>
                            <div className="projects__data">
                                <h3>Views - <span id="resultStore">{dStore}</span></h3>
                            </div>
                            <div className="projects__btn">
                                <a href="https://github.com/leonardoxyz/MERN-LoginAPP" target={"blank"}><button onClick={addStore}>See Project</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__img">
                        <img src={mh} />
                    </div>
                    <div className="projects__content grid">
                        <div className="projects__details">
                            <h2>MegaHealth<br/><span>Pharmaceutical ecommerce of school</span></h2>
                            <div className="projects__data">
                                <h3>Views - <span id="resultStore">{dStore}</span></h3>
                            </div>
                            <div className="projects__btn">
                                <a href="https://github.com/leonardoxyz/MegaHealthTCC" target={"blank"}><button onClick={addStore}>See Project</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


// const [toggleState, setToggleState] = useState(0);

// const toggleTab = (index) => {
//     setToggleState(index);
// };

// return (
//     <section className="projects section" id="projects">
//         <h2 className="section__title">My Projects</h2>
//         <span className="section__subtitle">A little about projects made by me</span>

//         <div className="projects__container container grid">
//             <div className="projects__content">
//                 <div>
//                     <i className="uil uil-bag projects__icon"></i>
//                     <h3 className="projects__title">My Portfolio</h3>
//                     <p className="projects__subtitle">Maybe you want to know how this site was developed...</p>
//                 </div>

//                 <span className="projects__button" onClick={() => toggleTab(1)}>
//                     View More{" "}
//                     <i className="uil uil-arrow-right projects__button-icon"></i>
//                 </span>
//                 <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
//                     <div className="projects__modal-content">
//                         <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>

//                         <h3 className="projects__modal-title">My Portfolio</h3>
//                         <p className="projects__modal-description">Developed in ReactJS</p>

//                         <ul className="projects__modal-projects grid">
//                             <li className="projects__modal-project">
//                                 <i className="uil uil-info projects__modal-icon"></i>
//                                 <p className="projects__modal-info">With study and research, I developed this portfolio to demonstrate to you, users, my hobby.</p>
//                             </li>

//                             <li className="projects__modal-project">
//                                 <i className="uil uil-import projects__modal-icon"></i>
//                                 <p className="projects__modal-info">Download the project and see more in depth how it was developed! br</p>
//                             </li>

//                             <br />

//                             <li className="projects__modal-project-right">
//                                 <p className="projects__modal-info">Leonardo Santos. All rights reserved.</p>
//                             </li>

//                             <li className="projects__modal-project-right">
//                                 <button className="button__download-project">Download Here</button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="projects__content">
//                 <div>
//                     <i className="uil uil-arrow projects__icon"></i>
//                     <h3 className="projects__title">Ui <br />Designer</h3>
//                 </div>

//                 <span className="projects__button" onClick={() => toggleTab(2)}>
//                     View More{" "}
//                     <i className="uil uil-arrow-right projects__button-icon"></i>
//                 </span>
//                 <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
//                     <div className="projects__modal-content">
//                         <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>

//                         <h3 className="projects__modal-title">Ui Designer</h3>
//                         <p className="projects__modal-description">Lorem ipsum dolor sit amet.</p>

//                         <ul className="projects__modal-projects grid">
//                             <li className="projects__modal-project">
//                                 <i className="uil uil-check-circle projects__modal-icon"></i>
//                                 <p className="projects__modal-info">I Develop the user interface.</p>
//                             </li>

//                             <li className="projects__modal-project">
//                                 <i className="uil uil-check-circle projects__modal-icon"></i>
//                                 <p className="projects__modal-info">Web page development.</p>
//                             </li>

//                             <li className="projects__modal-project">
//                                 <i className="uil uil-check-circle projects__modal-icon"></i>
//                                 <p className="projects__modal-info">I create ux element interactions.</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="projects__content">
//                 <div>
//                     <i className="uil uil-edit projects__icon"></i>
//                     <h3 className="projects__title">Visual <br />Designer</h3>
//                 </div>

//                 <span className="projects__button" onClick={() => toggleTab(3)}>
//                     View More
//                     <i className="uil uil-arrow-right projects__button-icon"></i>
//                 </span>
//                 <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
//                     <div className="projects__modal-content">
//                         <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>

//                         <h3 className="projects__modal-title">Visual Designer</h3>
//                         <p className="projects__modal-description">Lorem ipsum dolor sit amet.</p>

//                         <ul className="projects__modal-projects grid">
//                             <li className="projects__modal-project">
//                                 <i className="uil uil-check-circle projects__modal-icon"></i>
//                                 <p className="projects__modal-info">I Develop the user interface.</p>
//                             </li>

//                             <li className="projects__modal-project">
//                                 <i className="uil uil-check-circle projects__modal-icon"></i>
//                                 <p className="projects__modal-info">Web page development.</p>
//                             </li>

//                             <li className="projects__modal-project">
//                                 <i className="uil uil-check-circle projects__modal-icon"></i>
//                                 <p className="projects__modal-info">I create ux element interactions.</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

export default Projects