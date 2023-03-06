import { useState } from 'react';
import "./about.css";
import secundaryPhoto from "../../assets/secundaryPhoto.jpg";
import myCV from "../../assets/myCV.pdf";
import Info from './Info';
import { motion } from 'framer-motion';

export const About = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    let text = "I delved into the world of programming in 2017 without much knowledge but with a huge desire to learn. I used Java Decompiler to find out what each feature of that plugin was made of."
    let textMore = "Today I study Systems Analysis and Developer at Fatec - Taquaritinga. A place where I acquired diverse knowledge on various subjects with teachers dedicated to teaching. I have always been fascinated by drawings and their designs, I like their colors and shapes. I believe that this was the initiative for liking Front-end so much.";
    let textMore2 = "All the projects developed by me are listed in this portfolio and they won't be the only ones! In addition to developing these projects, I also like to assemble your Design before programming using Figma. I'm still learning to use its various functions, but I can say that I'm aware of most of it.";

    return (
        <section className="about section" id="about">
            <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} transition={{ duration: 0.8 }}>
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>
            </motion.div>

            <motion.div initial={{ x: 0, opacity: 0 }} whileInView={{ x: [-250, 0], opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="about__container container grid">
                    <img src={secundaryPhoto} alt="" className="about__img" />
                    <div className="about__data">
                        <Info />
                        <p className="about__description">
                            {text}
                            <br /><span onClick={() => toggleTab(1)}>Ler mais</span>
                            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                                    <h1 className="services__modal-title">A little about me</h1>
                                    <p className="about__modal-description uil uil-visual-studio"> - {textMore}</p><br />
                                    <p className="about__modal-description uil uil-analysis"> - {textMore2}</p>
                                    <br />
                                    <li className="services__modal-service-button">
                                        <a onClick={() => toggleTab(0)}><button className='services__button-repository'>Back</button></a>
                                    </li>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
