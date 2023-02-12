import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} transition={{ duration: 0.8 }}>
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>

                <div className="skills__container container grid">
                    <Frontend />
                    <Backend />
                </div>
            </section>
        </motion.div>
    )
}

export default Skills;