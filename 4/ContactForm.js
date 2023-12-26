import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/question?name=${formData.name}&email=${formData.email}&message=${formData.message}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ім'я:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                Ваше повідомлення:
                <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Відправити</button>
        </form>
    );
};

export default ContactForm;