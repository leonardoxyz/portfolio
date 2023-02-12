import React from 'react';
import { useState } from 'react';
import "./services.css";
import { motion } from 'framer-motion';

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <motion.div initial={{ x: 0, opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} transition={{ duration: 0.5 }}>
        <section className="services section" id="services">
            <h2 className="section__title">School projects</h2>
            <span className="section__subtitle">Projects made for educational purposes.</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil uil-folder services__icon"></i>
                        <h3 className="services__title">Completion of <br />course work</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More{" "}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">MegaHealth - Drugstore</h3>
                            <p className="services__modal-description">Project developed in Angular 6 in a team of 5 people from the 3rd year of higher education.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-letter-english-a services__modal-icon"></i>
                                    <p className="services__modal-info">Product Display with Crud.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-database services__modal-icon"></i>
                                    <p className="services__modal-info">Data entry in the database.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-location-arrow services__modal-icon"></i>
                                    <p className="services__modal-info">Value of the project by the bank - MB (Very good)</p>
                                </li>

                                <li className="services__modal-service-button">
                                    <a href="https://github.com/leonardoxyz/MegaHealthTCC" target={"blank"}><button className='services__button-repository'>Go to repository</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Ui <br />Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More{" "}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Ui Designer</h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I Develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Visual <br />Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I Develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
        </motion.div>
    )
}
