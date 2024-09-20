import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="row about">
            <div className="row g-5 mx-3">
                <h2 className="my-5">{t('about')}</h2>
                <div className="about-bg-layer1">
                    <div className="about-bg-layer2">
                        <img src="./pictures/CStone.png" className="img-fluid anime-picture" alt="Charlotte Stone" />
                        <div className="about-bg-layer3">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center py-5 px-5">
                                    <div>
                                        <h3>{t('hello')}</h3>
                                        <p>{t('aboutText1')}</p>
                                        <p>{t('aboutText2')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
