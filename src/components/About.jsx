import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="row about">
            <h2>{t('about')}</h2>
            <div className="row g-5 mx-2">
                <div className="col-12 col-lg-6">
                    <h3>{t('hello')}</h3>
                    <p>{t('aboutText1')}</p>
                    <p>{t('aboutText2')}</p>
                </div>
                <div className="col-12 col-lg-6">
                    <img src="#" className="img-fluid" alt="Charlotte Stone" />
                </div>
            </div>
        </section>
    );
}