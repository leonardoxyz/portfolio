import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';
import Social from './Social';

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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }} variants={{
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
                    <button className='btn-contact'>Contact</button>
                </a>
            </motion.div>

            <motion.div iinitial={{ opacity: 0 }} whileInView={{ y: [-30, 0], opacity: 1 }} transition={{ duration: 1 }}>
                <div className="home-scroll">
                    <Social />
                </div>
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