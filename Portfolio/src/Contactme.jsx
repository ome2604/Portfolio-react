import React, { useState } from "react";
import "./App.css";

export const Contactme = () => {
  let [formData, SetformData] = useState({
    Name: "",
    Email: "",
    yourMessage: "",
  });

  let handelChange = (e) => {
    SetformData((currData) => {
      currData[e.target.name] = e.target.value;
      return { ...currData };
    });
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    SetformData({
      Name: "",
      Email: "",
      yourMessage: "",
    });
  };

  return (
    <>
      <div className="formPage">
        <div className="contactMe">
          <h3>Contact Me</h3>
        </div>
        <div className="info">
          <h2>
            I would love to hear about your project and how I can help. Please
            fill in the form, and I will get back to you as soon as possible.
          </h2>
        </div>
        <div className="form">
          <form action="" onSubmit={handelSubmit}>
            <label htmlFor="Name" style={{ color: "white" }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.Name}
              onChange={handelChange}
              id="Name"
              name="Name"
              required
            />
             <br />
            <label htmlFor="email" style={{ color: "white" }}>
              Email
            </label>
            <input
              type="text"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handelChange}
              id="email"
              name="Email"
              required
            />
             <br />
            <label htmlFor="message" style={{ color: "white" }}>
              Your Message
            </label>
            <input
              type="text"
              placeholder="Your Message"
              value={formData.yourMessage}
              onChange={handelChange}
              id="message"
              name="yourMessage"
              required
            />
            <br />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactme;
