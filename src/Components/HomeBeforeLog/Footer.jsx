import './footer.css';
import React, { useState } from 'react';


const Footer = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Submit');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formData = {
      access_key: "ae13dc85-f68c-4faa-8b7a-6f4c8d2b9531",
      name: formDetails.name,
      email: formDetails.email,
      message: formDetails.message,
    };

    let response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });

    setButtonText("Submit");

    let result = await response.json();
    if (result.success) {
      setStatus({ success: true, message: 'Message sent successfully' });
      setFormDetails(formInitialDetails);
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <footer className="footer">
      <div className="flex flex-row mx-auto">
        {/* Left Section*/}
        <div className='left-box'>
          <div className="left flex flex-row">
            <div className="flex flex-row mx-auto space-x-10">
              <div className="left-item px-5 flex flex-col">
                <h4 className="footer-title">Resources</h4>
                <ul className="footer-links text-left">
                  {['Blogs', 'Case Studies', 'e-Books', 'Media Releases', 'Events', 'Brochure'].map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="left-item px-5 flex flex-col text-left">
                <h4 className="footer-title">Support Links</h4>
                <ul className="footer-links text-left">
                  {['FAQs', 'Privacy Policy', 'Testimonials', 'Terms of Use', 'Policies', 'Grievance'].map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="left-item px-10 flex flex-col">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links text-left">
                  {['About Us', 'Listing of Companies', 'College', 'Career with Us', 'Contact Us'].map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          <div className="social">
            <div className="flex flex-col space-y-3">
              <h4 className="footer-title pt-20">Follow Us</h4>
              <div className="flex flex-row space-x-4 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" className="social-icon">
                  <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                  <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
                  <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" className="social-icon">
                  <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </div>
              <div style={{ textAlign: "center", paddingLeft: "50px", paddingRight: "50px" }}>
                <div >
                  <p >
                    Browse by: Companies, Jobs, Locations, Communities, Recent Posts
                  </p>
                  <p>
                    Copyright © 2008-2024. Joboard LLC. "Joboard," "Worklife Pro," "Bowls,"
                    and logo are proprietary trademarks of Glassdoor LLC.
                  </p>
                </div>
              </div>

            </div>
          </div>


        </div>

        {/* Right section: Get In Touch form */}
        <div className="form-container">
          <h2 className="form-title">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                type="text"
                value={formDetails.name}
                onChange={(e) => onFormUpdate('name', e.target.value)}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                type="email"
                value={formDetails.email}
                onChange={(e) => onFormUpdate('email', e.target.value)}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                rows={4}
                value={formDetails.message}
                onChange={(e) => onFormUpdate('message', e.target.value)}
                placeholder="Your Message"
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              {buttonText}
            </button>
            {status.message && (
              <p className={`status-message ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>



      </div>

    </footer>
  );
};




export default Footer;
