import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
     const [result, setResult] = useState("");
       
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "3e7c8563-0592-4cf4-905c-99e39a689e0a");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult("Form Submitted Successfully"); 
        event.target.reset(); 
        
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>Feel free to reach out to us with any questions or inquiries.</p>
        <ul>
            <li><img src={mail_icon} alt="Mail Icon" /> Contact@edusity.com</li>
            <li><img src={phone_icon} alt="Phone Icon" /> 03351555772</li>
            <li><img src={location_icon} alt="Location Icon" /> 77 America, New York <br />USA</li>
        </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
               <input type="hidden" name="access_key" value="3e7c8563-0592-4cf4-905c-99e39a689e0a" />
                <label>Your Name</label>
                <input type="text" name='name' placeholder="Your Name" required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder="Your Phone Number" required />
                <label>Your Message</label>
                <textarea name='message' rows="5" placeholder="Your Message" required ></textarea>
                <button type="submit" className='btn dark-btn'>Send Message <img src={white_arrow} alt="White Arrow" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  ) 
}

export default Contact