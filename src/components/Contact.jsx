import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('error');
            return;
        }

        // Prepare the data to match EmailJS template variables
        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        // Send the email using EmailJS
        emailjs.send('service_dacd75t', 'template_l2dhb0z', templateParams, '8iKKGnQvHytbilY_v')
            .then(() => {
                setFormStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            }, (error) => {
                console.error('Failed to send email:', error);
                setFormStatus('error');
            });
    };

return (
    <section className="row g-5 mx-2 contact-container">
        <h2 className="contact-Title">{t('letMeHelpYou')}</h2>
        <div id="Contact">
        <div className="col-12 Contact-inner px-5">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">{t('yourName')}</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('enterYourName')}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">{t('yourEmail')}</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('enterYourEmail')}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">{t('yourMessage')}</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('enterYourMessage')}
                            ></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-learn">
                            {t('sendMessage')}
                        </button>
                    </div>
                </div>
            </form>

            {formStatus === 'success' && (
                <div className="alert alert-success mt-3">
                    {t('messageSent')}
                </div>
            )}
            {formStatus === 'error' && (
                <div className="alert alert-danger mt-3">
                    {t('fillOutFields')}
                </div>
            )}
        </div>
        </div>
    </section>
    );
}
