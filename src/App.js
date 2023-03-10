import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import { About } from "./components/about/About";
import Skills from "./components/skills/Skills";
import { Services } from "./components/services/Services";
import Opinions from "./components/opinions/Opinions";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUp />

      </main>

    </>
  );
}

export default App;
