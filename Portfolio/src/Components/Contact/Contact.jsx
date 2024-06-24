import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "64f7f8a6-4a3d-40f7-a0c6-008b9521688f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h1>Get in touch</h1>
        <div className="dash">
          <div className="dash1"></div>
          <div className="dash2"></div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="contact-title">Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want to work on. You can
            contact anytime
          </p>
          <div className="contact-details">
            <h1>Connect with me</h1>
            <div className="contact-icons" style={{ display: "flex" }}>
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-icon">
                <FaSquareXTwitter />
              </div>
              <div className="contact-icon">
                <FaInstagramSquare />
              </div>
            </div>

            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>johnsonjohnarul245@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9370885492</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Ambernath, Thane, Maharashtra</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
