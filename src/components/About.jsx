import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const aboutTexts = [
        t('aboutText1'),
        t('aboutText2'),
    ];

    const handleNextText = () => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % aboutTexts.length);
    };

    return (
        <section className="row about">
            <div className="row g-5 mx-3">
                <h2 className="my-5">{t('about')}</h2>
                <div className="about-bg-layer1">
                    <div className="about-bg-layer2">
                        <div className="about-bg-layer3">
                            <div className="row">
                                <img src="./pictures/CStone.png" className="img-fluid anime-picture" alt="Charlotte Stone" />
                                <div className="col-12 d-flex justify-content-center align-items-center py-5 px-5">
                                    <div>
                                        <h3>{t('hello')}</h3>
                                        <p>{aboutTexts[currentTextIndex]}</p>
                                        <p
                                            onClick={handleNextText} 
                                            className="next-text-button"
                                        >
                                            <i class="fa-solid fa-forward"></i>
                                        </p>
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
