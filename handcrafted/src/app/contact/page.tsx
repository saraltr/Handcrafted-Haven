'use client';
import { useState } from 'react';
import styles from './contact.module.css'; 

/*Guys. This form is a dummy form. It's not sending real data out*/
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value,
    }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log(formData); 
    alert('Thank you for your message. We will get back to you soon!');
  
    setFormData({
        name: '',
        email: '',
        message: '',
    });
};

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
