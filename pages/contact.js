import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Header from "../sections/header/Header";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w0atlfb', 'template_axp6ehi', form.current, 'O-hLjhGu-wK1T6KdQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="layout">
            <div className="container">
                <Header/>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name"/>
                    <label>Email</label>
                    <input type="email" name="user_email"/>
                    <label>Message</label>
                    <textarea name="message"/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
};