import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="row g-5 mx-2">
            <div className="col-6">
                <h3>{t('letMeHelpYou')}</h3>
            </div>
            <div className="col-6">
                <p>{t('contactText')}</p>
            </div>
        </section>
    );
}