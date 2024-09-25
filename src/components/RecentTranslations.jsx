import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TranslationCard from './TranslationCard';

const RecentTranslations = () => {
    const { t } = useTranslation();
    const [translations, setTranslations] = useState([]);
    const [visibleGroups, setVisibleGroups] = useState(1); // State to control how many groups to show

    useEffect(() => {
        fetch('./works/translations.json')
            .then(response => response.json())
            .then(data => setTranslations(data))
            .catch(error => console.error('Error fetching translations:', error));
    }, []);

    const reversedTranslations = [...translations].reverse();

    // Group translations in sets of 3
    const groupedTranslations = [];
    for (let i = 0; i < reversedTranslations.length; i += 3) {
        groupedTranslations.push(reversedTranslations.slice(i, i + 3));
    }

    // Function to show more groups when button is clicked
    const handleShowMore = () => {
        if (visibleGroups < groupedTranslations.length) {
            setVisibleGroups(visibleGroups + 1);
        }
    };

    return (
        <section className="row">
            <h2>{t('RecentTranslations')}</h2>
            <div className="container">
                <div className="row g-5 mx-2 justify-content-around">
                    {groupedTranslations.slice(0, visibleGroups).map((group, groupIndex) => (
                        <div key={groupIndex} className={`mb-4`}>
                            <div className="row g-5 mx-2 justify-content-around">
                                {group.map((translation) => (
                                    <TranslationCard key={translation.id} translation={translation} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {visibleGroups < groupedTranslations.length && (
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-learn"
                            onClick={handleShowMore}
                        >
                            {t('showMore')}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RecentTranslations;
