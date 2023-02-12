import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Data = () => {
    return (
        <div className="home__data">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.2 }} variants={{
                hidden: { opacity: 0, x: +50 },
                visible: { opacity: 1, x: 0 }

            }}>
                <h1 className="home__title typing-animation">
                    Léo Santos
                </h1>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.4 }} variants={{
                hidden: { opacity: 0, x: +100 },
                visible: { opacity: 1, x: 0 }
            }}>
                <h3 className="home__subtitle">
                    Front-end Developer<br />
                    Portfolio constantly updated!
                </h3>
                <p className="home__description">Just a noble developer in an ocean of code.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{
                hidden: { opacity: 0, x: +130 },
                visible: { opacity: 1, x: 0 }
            }}>
                <a href="https://wa.me/+5516993137105" target={'_blank'}>
                    <button>
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Contact</span>
                    </button>
                </a>
            </motion.div>

            <div className="home-social">
                <a href="https://github.com/Leonardoxyz" target="_blank"><GoMarkGithub /></a>
                <a href="https://wa.me/+5516993137105"><AiOutlineWhatsApp /></a>
                <a href="https://instagram.com/leozinjbk"><AiOutlineInstagram /></a>
                <a href=""><AiOutlineLinkedin /></a>
            </div>
        </div>
    )
}

export default Data;