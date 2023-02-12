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
                        <img src={AboutImg}/>
                    </div>
                    <div className="projects__content grid">
                        <div className="projects__details">
                            <h2>Léo Santos - Portfolio<br /><span>This project is the same one that is selling now!</span></h2>
                            <div className="projects__data">
                                <h3>Views - <span id="result">{dPortfolio}</span></h3>
                            </div>
                            <div className="projects__btn">
                                <a href="https://github.com/leonardoxyz/portfoliov2" target={"blank"}><button onClick={Add}>See Project</button></a>
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
                            <h2>MERN - Login APP<br /><span>Project for user registration.</span></h2>
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
                            <h2>MegaHealth<br /><span>Pharmaceutical ecommerce of school</span></h2>
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

export default Projects