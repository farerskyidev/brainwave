import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes } from "react-icons/fa";

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
      <button className='close_form' onClick={closeModal}>
        <FaTimes />
      </button>
      {submitted ? (
        <div className='text-4xl justify-center flex h-full items-center '>Thank you for your message!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label className='text-base mb-2' htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='text-base mb-2' htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='text-base mb-2 resize-none' htmlFor="message">Message:</label>
            <textarea className='p-2 resize-none'
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div> 
          <button className='submit_button_form text-bgColor px-7 py-4 font-extrabold rounded-xl relative z-10 bg-whiteColor' type="submit">Submit</button>
        </form>
      )}
    </Modal>
  );
};

export default ContactForm;
