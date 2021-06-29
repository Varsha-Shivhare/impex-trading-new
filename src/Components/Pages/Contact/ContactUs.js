import React from 'react'
import '../../../App.css';
import './ContactUs.css';

export default function ContactUs() {
    return (
        <section id="contact" className="contact">
        <div className="w-100 p-3" data-aos="fade-up">
            <header className=" mt-5 section-header">
                <h2  className='main_heading'>Contact Us</h2>
            </header>
            <div className="row gy-4">
                <div className="col-12">
                    <div className="row gy-4">
                        <div className="col-md-6 col-12">
                            <div className="info-box">
                                <i className="bi bi-geo-alt"></i>
                                <h3>Address</h3>
                                <p>Haryana Air Conditioning 2001, Ashok Nagar, Sector 14 Karnal, Haryana, 132001 </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <a href="tel:+919354296942" target="_blank" rel="noopener noreferrer">
                                <div className="info-box">
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>9354296942</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6">
                            <a href="mailto:service@haryanaairconditioning.com" target="_blank" rel="noopener noreferrer">
                                <div className="info-box">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>service@haryanaair<br/>conditioning.com</p>
                                </div>
                            </a>
                        </div>
					</div>
				</div>
                <div className="col-md-6 py-4">
                    <iframe title= 'balalala' src={"https://maps.google.com/maps?q=amrut%20nagar%20&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                        width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-md-6">
                    <form id="EnquiryForm">
                        <div className="row gy-4">
                            <div className="col-md-12">
                                <input id="fullname" type="text" name="name" className="form-control" placeholder="Your Name" required/>
                            </div>
                            <div className="col-md-6 ">
                                <input id="email" type="email" className="form-control" name="email" placeholder="Your Email" required/>
                            </div>
                            <div className="col-md-6 ">
                                <input  id="number" type="number" className="form-control" name="number" placeholder="Mobile Number" required/>
                            </div>
                            <div className="col-md-12">
                                <input id="subject" type="text" className="form-control" name="subject" placeholder="Subject" required/>
                            </div>
                            <div className="col-md-12">
                                <textarea id="message" className="form-control" name="message" rows="6" placeholder="Message">
                                </textarea>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                <button type="button" className="btn btn-dark mb-4" onclick="sendInQuery();">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
