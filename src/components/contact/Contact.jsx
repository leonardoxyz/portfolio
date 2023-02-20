import React, { useRef } from "react";
import { contacts } from "../../Data";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlhfblp",
        "template_9puf8aa",
        form.current,
        "8c1O3Ty-t9BttFf6P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const sendNotify = () => {
    toast.dark("😊 Thank you for contacting us!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ToastContainer
        toastStyle={{ color: "white", backgroundColor: "#212121" }}
      />
      <div className="section container" id="contact">
        <h2 className="section__title">Contact me</h2>
        <span className="section__subtitle">Get in touch</span>
        <div className="contact__form">
          <div className="contact__left__container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-50, 0], opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Hey, interested?</h3>
              <p className="contact__text">
                Interested in my work? Get in touch now. I will respond to you
                within 48 hours.
              </p>
              {contacts.map((contact) => {
                return (
                  <div className="contact__left" key={contact.id}>
                    <div className="contact__icon">{contact.icon}</div>

                    <p className="contact__infos">{contact.text}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="contact__right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [50, 0], opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Send for me!</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact__row">
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="contact__row">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Your phone number"
                    required
                  />
                  <input type="email" placeholder="Email" required />
                </div>

                <div className="contact__row">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="contact__button">
                  <button
                    className="contact-cta"
                    type="submit"
                    onClick={sendNotify}
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
