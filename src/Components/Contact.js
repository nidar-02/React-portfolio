import React from "react";
import './styles/Contact.css'
import { ArrowBack } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact">
            <Link to='/'>
                <ArrowBack className="arrow" />
            </Link>
            <div className="inputs">
                <h1>Contact me</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
