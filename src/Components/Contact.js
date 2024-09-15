import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Let's work together.</h1>
          <p>
            Or reach us via: <a href="mailto:Publius@mail.com">Publius@mail.com</a>
          </p>
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="First name" className="input-field" />
              <input type="text" placeholder="Last name" className="input-field" />
            </div>
            <input type="email" placeholder="Email" className="input-field full-width" />
            <textarea placeholder="Message" className="input-field message-field"></textarea>
            <div className="form-actions">
              <button type="button" className="attach-btn">Add attachment</button>
              <button type="submit" className="submit-btn">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
