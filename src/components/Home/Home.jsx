import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import photo from '../../assets/profile.png'
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>

                        <div className="home__img">
                            <img src={photo} alt="" />
                        </div>
                    </motion.div>
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home;