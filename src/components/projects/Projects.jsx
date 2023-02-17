import React, { useState } from 'react';
import "./projects.css";
import "../../App.js";
import { motion, AnimatePresence } from 'framer-motion';
import List from './List';
import Items from './Items'
import { projects } from '../../Data';

const allNavList = [
    'All',
    ...new Set(projects.map((project) => project.category)),
]
console.log(allNavList);

function Projects() {
    const [projectItems, setMenuitems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);
    const filterItems = (category) => {

        if (category == 'All') {
            setMenuitems(projects);
            return;
        }

        const newProjectItems = projects.filter((item) => item.category === category);
        setMenuitems(newProjectItems);
    }

    return (
        <motion.div>
            <AnimatePresence>
                <section className="projects__section" id="projects">
                    <h2 className="section__title">My Projects</h2>
                    <span className="section__subtitle">A little about projects made by me</span>
                    <List list={navList} filterItems={filterItems} />

                    <div className="projects__container container grid">
                        <Items projectItems={projectItems} />
                    </div>
                </section>
            </AnimatePresence>
        </motion.div>

    );
}

export default Projects