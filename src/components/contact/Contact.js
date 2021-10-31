import React from "react";
import Footer from "../footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact mt-3">
      <h1 className="text-center">Contact Form</h1>

      <div class="container contact-form my-5">
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label for="email">Email</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your email.."
          />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
