import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="row about">
            <div className="row g-5 mx-2">
            <h2>{t('about')}</h2>
                <div className="col-12 col-lg-6">
                    <div className="about-bg-layer1">
                        <div className="about-bg-layer2">
                            <div className="about-bg-layer3">
                                <h3>{t('hello')}</h3>
                                <p>{t('aboutText1')}</p>
                                <p>{t('aboutText2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
<div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
    <img src="./pictures/CharlotteStone.jpeg" className="img-fluid about-img" alt="Charlotte Stone" />
</div>
            </div>
        </section>
    );
}