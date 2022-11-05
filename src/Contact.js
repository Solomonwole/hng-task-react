import React from "react";
import FooterSection from './components/Footer/FooterSection';

function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <label>First Name</label>
        <input type="text" id="first_name"/>
        <label>Last Name</label>
        <input type="text" id="last_name" /><br/>
        <label>Email</label>
        <input type="email" id="email" /><br/>
        <label>Message</label>
        <textarea id="message"></textarea><br/>
        <input type="checkbox" />
        <label>
          You agree to providing your data to Zuribot who may contact you.
        </label>
        <br/>
        <button id="btn__submit">Send Message</button>
      </form>

      <FooterSection/>
    </>
  );
}

export default Contact;
