import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Wave from './Wave';
import TranslationCard from './TranslationCard';

const RecentTranslations = () => {
    const { t } = useTranslation();
    const [translations, setTranslations] = useState([]);

    useEffect(() => {
        fetch('./works/translations.json')
            .then(response => response.json())
            .then(data => setTranslations(data))
            .catch(error => console.error('Error fetching translations:', error));
    }, []);

    const reversedTranslations = [...translations].reverse();

    const groupedTranslations = [];
    for (let i = 0; i < reversedTranslations.length; i += 3) {
        groupedTranslations.push(reversedTranslations.slice(i, i + 3));
    }

    return (
        <section className="row">
            <Wave />
            <h2>{t('RecentTranslations')}</h2>
            <div className="container">
                <div id="recentTranslationsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {groupedTranslations.map((group, groupIndex) => (
                            <div key={groupIndex} className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}>
                                <div className="row g-5 mx-2 justify-content-around">
                                    {group.map((translation) => (
                                        <TranslationCard key={translation.id} translation={translation} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Moved the buttons below the items */}
                    <div className="carousel-controls mt-3 text-center">
                        <button className="carousel-control-prev" type="button" data-bs-target="#recentTranslationsCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#recentTranslationsCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentTranslations;
