import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Leonardo Santos</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About me</a>
                    </li>

                    <li>
                        <a href="#opinions" className="footer__link">Opinions</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://instagram.com/leozinjbk" className="footer__social-link" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://wa.me/+5516993137105" className="footer__social-link" target={"_blank"}>
                        <i class="uil uil-whatsapp"></i>
                    </a>

                    <a href="https://github.com/Leonardoxyz" className="footer__social-link" target={"_blank"}>
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Leonardo Santos. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;