import React, { useState } from 'react';
import Modal from 'react-modal';

const ContactForm = ({ modalIsOpen, closeModal }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
console.log({ name, email, message });
setSubmitted(true);
};

return (
<Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Contact Form">
    <button className='close_form' onClick={closeModal}>Close</button>
    {submitted ? (
    <div>Thank you for your message!</div>
    ) : (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div>
        <label htmlFor="message">Message:</label>
        <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
        />
        </div>
        <button className='submit_button_form' type="submit">Submit</button>
    </form>
    )}
</Modal>
);
};

export default ContactForm;
