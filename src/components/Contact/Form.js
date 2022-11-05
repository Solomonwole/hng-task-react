import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="body">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div className="form__firstname">
          <label>First Name</label>
          <input type="text" id="first_name" placeholder="Enter your first name" />
        </div>

        <div className="form__lastname">
          <label>Last Name</label>
          <input type="text" id="last_name" placeholder="Enter your last name" />
        </div>
        

        <div className="form__email">
          <label>Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>

        <div className="form__message">
          <label>Message</label>
          <textarea id="message" rows='10' placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>
      
        <div className="form__checkbox">
          <input type="checkbox" />
          <label>
            You agree to providing your data to Solomonwole who may contact you.
          </label>
        </div>
        
        <button id="btn__submit">Send Message</button>
      </form>
    </div>
  );
}
