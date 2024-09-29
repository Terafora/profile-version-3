import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MainContent() {
    const { t } = useTranslation();

    // Custom smooth scroll function with offset
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement.id === 'About') {
            const offsetPosition = targetElement.offsetTop - 90;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="main-container" id="Home">
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="row g-5 mx-2">
                    <div className="col text-center">
                        <h1 className="headline-one">{t('name')}</h1>
                        <h2 className="lead">{t('title')}</h2>
                        <br></br>
                        <button
                            className="btn-learn px-5 py-3 mx-2"
                            onClick={(e) => handleSmoothScroll(e, 'About')}
                        >
                            {t('learnMore')}
                        </button>
                        <button
                            className="btn-learn px-5 py-3 mx-2"
                            onClick={(e) => handleSmoothScroll(e, 'Contact')}
                        >
                            {t('contact')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
