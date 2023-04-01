import React from "react";

export default function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">+4 Years Studing</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">+2 Projects with API</span>
      </div>

      <div className="about__box">
        <i className="bx bx-code-curly about__icon"></i>
        <h3 className="about__title">Developments</h3>
        <span className="about__subtitle">Front-End is Life</span>
      </div>
    </div>
  );
}
